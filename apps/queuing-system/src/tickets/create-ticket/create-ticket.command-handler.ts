/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { generateCode } from '@turnly/common'
import {
  CommandHandler,
  ICommandHandler,
  IEventBus,
  IQueryBus,
} from '@turnly/core'
import { ConflictException } from '@turnly/observability'
import { GetActiveTicketsByCustomerQuery } from 'tickets/get-active-tickets-by-customer/get-active-tickets-by-customer.query'
import { ITicketsWritableRepo } from 'tickets/shared/domain/contracts/tickets-repo.interface'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'
import { TicketPriority } from 'tickets/shared/domain/enums/TicketPriority'
import { TicketStatus } from 'tickets/shared/domain/enums/TicketStatus'

import { CreateTicketCommand } from './create-ticket.command'

@CommandHandler(CreateTicketCommand)
export class CreateTicketCommandHandler
  implements ICommandHandler<CreateTicketCommand, Ticket>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly queryBus: IQueryBus,
    private readonly ticketsWritableRepo: ITicketsWritableRepo
  ) {}

  public async execute(command: CreateTicketCommand) {
    const tickets = await this.queryBus.ask<Ticket[]>(
      GetActiveTicketsByCustomerQuery.build(command)
    )

    if (tickets.length)
      throw new ConflictException(
        'Customer already has tickets, cannot create new ticket.'
      )

    const ticket = Ticket.create({
      ...command,
      status: TicketStatus.AVAILABLE,
      priority: TicketPriority.NORMAL,
      displayCode: await this.generateDisplayCode(command.serviceName),
    })

    await this.ticketsWritableRepo.save(ticket)

    this.eventBus.publish(ticket.pull())

    return ticket
  }

  private async generateDisplayCode(serviceName: string) {
    const prefix = serviceName.charAt(0).toUpperCase()
    const code = generateCode()

    return `${prefix}-${code}`
  }
}