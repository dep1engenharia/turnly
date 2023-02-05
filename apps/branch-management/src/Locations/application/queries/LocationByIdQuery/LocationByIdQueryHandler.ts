/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { ILocationsReadableRepo } from 'Locations/domain/contracts/ILocationsRepo'
import { Location } from 'Locations/domain/entities/Location'

import { LocationByIdQuery } from './LocationByIdQuery'

@QueryHandler(LocationByIdQuery)
export class LocationByIdQueryHandler
  implements IQueryHandler<LocationByIdQuery, Nullable<Location>>
{
  public constructor(
    private readonly locationsReadableRepo: ILocationsReadableRepo
  ) {}

  public async execute({ id, organizationId }: LocationByIdQuery) {
    const query = new QueryBuilder<Location>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()

    return await this.locationsReadableRepo.getOne(query)
  }
}
