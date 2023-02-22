/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { ITicketsMapper } from 'Tickets/Shared/domain/contracts/ITicketsMapper'
import { ITicketsWritableRepo } from 'Tickets/Shared/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/Shared/domain/entities/Ticket'

import { ITicketDocument, TicketModel } from '../models/TicketModel'

export class TicketsWritableRepo
  extends MongoWritableRepo<Ticket, ITicketDocument>
  implements ITicketsWritableRepo
{
  public constructor(ticketsMapper: ITicketsMapper<ITicketDocument>) {
    super(TicketModel, ticketsMapper)
  }
}
