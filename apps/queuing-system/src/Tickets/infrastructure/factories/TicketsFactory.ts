/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Box,
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { AnnounceTicketCommandHandler } from 'Tickets/application/commands/AnnounceTicketCommand'
import { CallTicketCommandHandler } from 'Tickets/application/commands/CallTicketCommand'
import { CreateTicketCommandHandler } from 'Tickets/application/commands/CreateTicketCommand'
import { CreateTicketReadingDBCommandHandler } from 'Tickets/application/commands/CreateTicketReadingDBCommand'
import { LeaveTicketCommandHandler } from 'Tickets/application/commands/LeaveTicketCommand'
import { ResolveTicketCommandHandler } from 'Tickets/application/commands/ResolveTicketCommand'
import { ActiveTicketsByCustomerQueryHandler } from 'Tickets/application/queries/ActiveTicketsByCustomerQuery'
import { TicketByIdQueryHandler } from 'Tickets/application/queries/TicketByIdQuery'
import { TicketsBeforeYoursQueryHandler } from 'Tickets/application/queries/TicketsBeforeYoursQuery'
import { TicketsByLocationQueryHandler } from 'Tickets/application/queries/TicketsByLocationQuery'
import { TicketsWaitingForServiceQueryHandler } from 'Tickets/application/queries/TicketsWaitingForServiceQuery'
import { CreateTicketReadingDBSubscriber } from 'Tickets/application/subscribers/CreateTicketReadingDBSubscriber'
import { NotifyCustomerCalledSubscriber } from 'Tickets/application/subscribers/NotifyCustomerCalledSubscriber'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketsController } from '../api/controllers/TicketsController'
import { TicketsReadableRepo } from '../persistence/mongo/repositories/TicketsReadableRepo'
import { TicketsWritableRepo } from '../persistence/mongo/repositories/TicketsWritableRepo'

export class TicketsFactory {
  public static getController(): TicketsController {
    return Box.resolve<TicketsController>('ticketsController')
  }

  public static getWritableRepo(): IWritableRepository<Ticket> {
    return Box.resolve<TicketsWritableRepo>('ticketsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Ticket> {
    return Box.resolve<TicketsReadableRepo>('ticketsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve<TicketByIdQueryHandler>('ticketByIdQueryHandler'),
      Box.resolve<ActiveTicketsByCustomerQueryHandler>(
        'activeTicketsByCustomerQueryHandler'
      ),
      Box.resolve<TicketsBeforeYoursQueryHandler>(
        'ticketsBeforeYoursQueryHandler'
      ),
      Box.resolve<TicketsWaitingForServiceQueryHandler>(
        'ticketsWaitingForServiceQueryHandler'
      ),
      Box.resolve<TicketsByLocationQueryHandler>(
        'ticketsByLocationQueryHandler'
      ),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve<CreateTicketCommandHandler>('createTicketCommandHandler'),
      Box.resolve<CreateTicketReadingDBCommandHandler>(
        'createTicketReadingDBCommandHandler'
      ),
      Box.resolve<LeaveTicketCommandHandler>('leaveTicketCommandHandler'),
      Box.resolve<AnnounceTicketCommandHandler>('announceTicketCommandHandler'),
      Box.resolve<ResolveTicketCommandHandler>('resolveTicketCommandHandler'),
      Box.resolve<CallTicketCommandHandler>('callTicketCommandHandler'),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return [
      Box.resolve<CreateTicketReadingDBSubscriber>(
        'createTicketReadingDatabaseSubscriber'
      ),
      Box.resolve<NotifyCustomerCalledSubscriber>(
        'notifyCustomerCalledSubscriber'
      ),
    ]
  }
}
