/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import {
  DateTime,
  IQueryHandler,
  QueryBuilder,
  QueryHandler,
} from '@turnly/shared'
import { ITicketsReadableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { GetAnUnexpiredTicketQuery } from './GetAnUnexpiredTicketQuery'

@QueryHandler(GetAnUnexpiredTicketQuery)
export class GetAnUnexpiredTicketQueryHandler
  implements IQueryHandler<GetAnUnexpiredTicketQuery, Nullable<Ticket>>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({
    params: { id, organizationId },
  }: GetAnUnexpiredTicketQuery) {
    const today = DateTime.today().toJSDate()

    const query = new QueryBuilder<Ticket>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .gte('createdAt', today)
      .getOne()

    return await this.ticketsReadableRepo.getOne(query)
  }
}