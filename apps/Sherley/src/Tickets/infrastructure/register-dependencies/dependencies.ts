import { Box, ioc } from '@turnly/shared'
import { CreateTicketCommandHandler } from 'Tickets/application/commands/CreateTicketCommand'
import { CreateTicketReadingDBCommandHandler } from 'Tickets/application/commands/CreateTicketReadingDBCommand'
import { TicketByIdQueryHandler } from 'Tickets/application/queries/TicketByIdQuery'
import { CreateTicketReadingDBSubscriber } from 'Tickets/application/subscribers/CreateTicketReadingDBSubscriber'
import { CreateTicketUseCase } from 'Tickets/application/use-cases/CreateTicketUseCase'

import { TicketsController } from '../api/controllers/TicketsController'
import { TicketsWritableForReadableRepo } from '../persistence/elasticsearch/repositories/TicketsWritableForReadableRepo'
import { TicketMapper } from '../persistence/mongo/entity-model-mappers/TicketMapper'
import { TicketReadableRepo } from '../persistence/mongo/repositories/TicketsReadableRepo'
import { TicketsWritableRepo } from '../persistence/mongo/repositories/TicketsWritableRepo'

Box.register({
  ticketsMapper: ioc.asClass(TicketMapper).singleton(),
  ticketsReadableRepo: ioc.asClass(TicketReadableRepo).singleton(),
  ticketsWritableRepo: ioc.asClass(TicketsWritableRepo).singleton(),
  ticketsWritableForReadableRepo: ioc
    .asClass(TicketsWritableForReadableRepo)
    .singleton(),
  ticketsController: ioc.asClass(TicketsController).singleton(),
})

/**
 * Use cases
 */
Box.register({
  createTicketUseCase: ioc.asClass(CreateTicketUseCase).singleton(),
})

/**
 * Command handlers
 */
Box.register({
  createTicketCommandHandler: ioc
    .asClass(CreateTicketCommandHandler)
    .singleton(),
  createTicketReadingDBCommandHandler: ioc
    .asClass(CreateTicketReadingDBCommandHandler)
    .singleton(),
})

/**
 * Event subscribers
 */
Box.register({
  createTicketReadingDatabaseSubscriber: ioc
    .asClass(CreateTicketReadingDBSubscriber)
    .singleton(),
})

/**
 * Query handlers
 */
Box.register({
  ticketByIdQueryHandler: ioc.asClass(TicketByIdQueryHandler).singleton(),
})
