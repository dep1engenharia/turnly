/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'
import { AnswerCreatedEvent } from 'answers/create-answers-bulk/events/answer-created.event'

import { EntityTypes } from '../enums/entity-type.enum'

/**
 * Answer
 *
 * @description Represents answers that can be used to create custom forms for any entity.
 *
 * @author Turnly
 */
export class Answer extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Answer
     */
    id: Guid,

    /**
     * Label
     *
     * @description A human-readable name for the Answer.
     */
    private value: string,

    /**
     * Description
     *
     * @description A human-readable description of the Answer.
     */
    private fieldId: string,

    /**
     * Type
     *
     * @description The frontend type of the Answer.
     */
    private entityId: string,

    /**
     * Entity Type
     *
     * @description The entity type that the Answer is associated with.
     */
    private readonly entityType: EntityTypes,

    /**
     * Organization
     *
     * @description The Organization that the Answer belongs to.
     */
    private readonly organizationId: Guid,

    /**
     * Extra
     *
     * @description Free-form data as name/value pairs that can be used
     * to store additional information about the Answer.
     */
    private readonly extra: Nullable<Extra[]> = null
  ) {
    super(id)
  }

  /**
   * Create Answer
   *
   * @description Creates a new Answer.
   */
  public static create(
    attributes: Omit<EntityAttributes<Answer>, 'id'>
  ): Answer {
    const answer = new Answer(
      Identifier.generate('answer'),
      attributes.value,
      attributes.fieldId,
      attributes.entityId,
      attributes.entityType,
      attributes.organizationId,
      attributes.extra
    )

    answer.register(new AnswerCreatedEvent(answer.toObject()))

    return answer
  }

  /**
   * Build Answer
   *
   * @description Builds a Answer from an object.
   */
  public static build(attributes: EntityAttributes<Answer>): Answer {
    return new Answer(
      attributes.id,
      attributes.value,
      attributes.fieldId,
      attributes.entityId,
      attributes.entityType,
      attributes.organizationId,
      attributes.extra
    )
  }

  /**
   * Answer object
   *
   * @description Returns the Answer as an object.
   */
  public toObject() {
    return {
      id: this.id,
      value: this.value,
      fieldId: this.fieldId,
      entityId: this.entityId,
      entityType: this.entityType,
      organizationId: this.organizationId,
      extra: this.extra,
    }
  }
}
