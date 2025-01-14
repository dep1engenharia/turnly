/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IWritableRepository } from '@turnly/core'
import { TestWritableRepo } from '@turnly/testing'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

export class TicketsWritableRepo
  extends TestWritableRepo<Ticket>
  implements IWritableRepository<Ticket> {}
