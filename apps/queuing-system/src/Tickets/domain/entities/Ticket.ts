/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  BadRequestException,
  ConflictException,
  Extra,
  Guid,
  Identifier,
  InvalidStateException,
  Nullable,
} from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'

import { TicketPriority } from '../enums/TicketPriority'
import { TicketScore } from '../enums/TicketScore'
import { TicketSource } from '../enums/TicketSource'
import { TicketStatus } from '../enums/TicketStatus'
import { TicketAnnouncedEvent } from '../events/TicketAnnouncedEvent'
import { TicketCalledEvent } from '../events/TicketCalledEvent'
import { TicketCancelledEvent } from '../events/TicketCancelledEvent'
import { TicketCompletedEvent } from '../events/TicketCompletedEvent'
import { TicketCreatedEvent } from '../events/TicketCreatedEvent'
import { TicketDiscardedEvent } from '../events/TicketDiscardedEvent'
import { TicketReturnedEvent } from '../events/TicketReturnedEvent'
import { Rating } from './Rating'

type IgnoreAttrs = 'id' | 'assigneeId' | 'createdAt' | 'rating' | 'updatedAt'
export type CreateTicketParams = Omit<EntityAttributes<Ticket>, IgnoreAttrs>

/**
 * Ticket
 *
 * @description Represent a Customer's single visit to a "Location".
 * A Ticket is created every time a Customer is added to the queue using the Integration.
 *
 * @author Turnly
 */
export class Ticket extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Ticket
     */
    id: Guid,

    /**
     * Status
     *
     * @description Represents the life-cycle of a Ticket.
     */
    private status: TicketStatus,

    /**
     * Priority
     *
     * @description Represents the priority of a Ticket.
     */
    private readonly priority: TicketPriority,

    /**
     * Source
     *
     * @description Represents the source of a Ticket (e.g. API, Widget, Chat, etc.).
     */
    private readonly source: TicketSource,

    /**
     * Display Code
     *
     * @description A unique code that is used to display the Ticket in the UI.
     */
    private readonly displayCode: string,

    /**
     * Service
     *
     * @description The Service that the Customer expects to be served at the Location.
     */
    private readonly serviceId: Guid,

    /**
     * Location
     *
     * @description The Location where the Customer is being attended.
     */
    private readonly locationId: Guid,

    /**
     * Customer
     *
     * @description The Customer about to visit the Location.
     */
    private readonly customerId: Guid,

    /**
     * Organization
     *
     * @description The Organization that the Ticket belongs to.
     */
    private readonly organizationId: Guid,

    /**
     * Extra
     *
     * @description Free-form data as name/value pairs that can be used
     * to store additional information about the Ticket.
     */
    private readonly extra: Nullable<Extra[]> = null,

    /**
     * Created At
     *
     * @description The date and time the Ticket was created.
     */
    private readonly createdAt?: Nullable<Date>,

    /**
     * Update At
     *
     * @description The date and time the Ticket was updated.
     */
    private readonly updatedAt: Nullable<Date> = null,

    /**
     * Assignee
     *
     * @description The Agent that is currently assigned to the Ticket.
     */
    private assigneeId: Nullable<Guid> = null,

    /**
     * Rating
     *
     * @description The Customer's rating for the experience at the Location.
     */
    private rating: Nullable<Rating> = null
  ) {
    super(id)
  }

  public leave(): void {
    if (this.isCompleted())
      throw new InvalidStateException('Oops!, you can not leave this ticket.')

    this.status = TicketStatus.CANCELLED

    this.register(new TicketCancelledEvent(this.toObject()))
  }

  public announce(): void {
    if (this.status !== TicketStatus.AVAILABLE)
      throw new InvalidStateException(
        'Oops!, you can not announce this ticket, it is not available.'
      )

    this.status = TicketStatus.ANNOUNCED

    this.register(new TicketAnnouncedEvent(this.toObject()))
  }

  public serve(): void {
    if (!this.isCalled())
      throw new InvalidStateException(
        "Oops!, you're trying to serve a ticket that has not been called."
      )

    this.status = TicketStatus.SERVED

    this.register(new TicketCompletedEvent(this.toObject()))
  }

  public discard(): void {
    if (!this.isCalled())
      throw new InvalidStateException(
        "Oops!, you're trying to discard a ticket that has not been called."
      )

    this.status = TicketStatus.DISCARDED

    this.register(new TicketDiscardedEvent(this.toObject()))
  }

  public returnToQueue(): void {
    if (!this.isCalled())
      throw new InvalidStateException(
        "Oops!, you're trying to return a ticket that has not been called."
      )

    this.status = TicketStatus.RETURNED

    this.register(new TicketReturnedEvent(this.toObject()))
  }

  public call(assigneeId: Guid): void {
    if (!this.isToCall())
      throw new InvalidStateException(
        'Oops!, you can not call this ticket, it is not available.'
      )

    this.assigneeId = assigneeId

    this.moveToCallStatus()

    this.register(new TicketCalledEvent(this.toObject()))
  }

  private moveToCallStatus(): void {
    if (this.status === TicketStatus.RECALLED) return

    this.status =
      this.status === TicketStatus.CALLED
        ? TicketStatus.RECALLED
        : TicketStatus.CALLED
  }

  public addRating(rating: Rating): void {
    const isUnknownScore = !Object.values(TicketScore).includes(rating.score)

    if (isUnknownScore)
      throw new BadRequestException(
        'Oops!, you can not add a rating with an invalid score.'
      )

    if (!this.isPendingForRating())
      throw new ConflictException(
        "Oops!, can't add a rating because the ticket is not in a valid state or it has already been rated."
      )

    this.rating = rating
    this.status = TicketStatus.SERVED_WITH_RATING

    this.register(new TicketCompletedEvent(this.toObject()))
  }

  public isOwnedBy(customerId: Guid): boolean {
    return this.customerId === customerId
  }

  public isActive(): boolean {
    return Ticket.getActiveStatus().includes(this.status)
  }

  public isPendingForRating(): boolean {
    return this.status === TicketStatus.SERVED
  }

  public isCompleted(): boolean {
    return Ticket.getCompletedStatus().includes(this.status)
  }

  public isToAttend(): boolean {
    return Ticket.getToAttendStatus().includes(this.status)
  }

  public isCalled(): boolean {
    return Ticket.getCalledStatus().includes(this.status)
  }

  public static getCalledStatus(): TicketStatus[] {
    return [TicketStatus.CALLED, TicketStatus.RECALLED]
  }

  public isToCall(): boolean {
    return Ticket.getToCallStatus().includes(this.status)
  }

  public static getActiveStatus(): TicketStatus[] {
    return [
      TicketStatus.AVAILABLE,
      TicketStatus.ANNOUNCED,
      TicketStatus.CALLED,
      TicketStatus.RECALLED,
      TicketStatus.RETURNED,
    ]
  }

  public static getToCallStatus(): TicketStatus[] {
    return [
      TicketStatus.ANNOUNCED,
      TicketStatus.CALLED,
      TicketStatus.RECALLED,
      TicketStatus.RETURNED,
    ]
  }

  public static getCompletedStatus(): TicketStatus[] {
    return [
      TicketStatus.DISCARDED,
      TicketStatus.REMOVED,
      TicketStatus.INACTIVE,
      TicketStatus.CANCELLED,
      TicketStatus.SERVED_WITH_RATING,
      TicketStatus.SERVED,
    ]
  }

  public static getToAttendStatus(): TicketStatus[] {
    return [
      TicketStatus.AVAILABLE,
      TicketStatus.ANNOUNCED,
      TicketStatus.CALLED,
      TicketStatus.RECALLED,
    ]
  }

  public getExtra(key: string): Nullable<string> {
    return this.extra?.find(extra => extra.key === key)?.value ?? null
  }

  /**
   * Create Ticket
   *
   * @description Creates a new Ticket.
   */
  public static create(attributes: CreateTicketParams): Ticket {
    const ticket = new Ticket(
      Identifier.generate('ticket'),
      attributes.status,
      attributes.priority,
      attributes.source,
      attributes.displayCode,
      attributes.serviceId,
      attributes.locationId,
      attributes.customerId,
      attributes.organizationId,
      attributes.extra
    )

    ticket.register(new TicketCreatedEvent(ticket.toObject()))

    return ticket
  }

  /**
   * Build Ticket
   *
   * @description Builds a Ticket from an object.
   */
  public static build(attributes: EntityAttributes<Ticket>): Ticket {
    return new Ticket(
      attributes.id,
      attributes.status,
      attributes.priority,
      attributes.source,
      attributes.displayCode,
      attributes.serviceId,
      attributes.locationId,
      attributes.customerId,
      attributes.organizationId,
      attributes.extra,
      attributes.createdAt,
      attributes.updatedAt,
      attributes.assigneeId,
      attributes.rating
    )
  }

  /**
   * Ticket object
   *
   * @description Returns the Ticket as an object.
   */
  public toObject() {
    return {
      id: this.id,
      status: this.status,
      priority: this.priority,
      source: this.source,
      displayCode: this.displayCode,
      serviceId: this.serviceId,
      locationId: this.locationId,
      customerId: this.customerId,
      organizationId: this.organizationId,
      assigneeId: this.assigneeId,
      createdAt: this.createdAt as Date,
      updatedAt: this.updatedAt as Date,
      rating: this.rating,
      extra: this.extra,
    }
  }
}
