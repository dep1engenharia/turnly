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
import { LocationStatus } from 'Locations/domain/enums/LocationStatus'

import { SearchAvailableLocationsForServingQuery } from './SearchAvailableLocationsForServingQuery'

@QueryHandler(SearchAvailableLocationsForServingQuery)
export class SearchAvailableLocationsForServingQueryHandler
  implements
    IQueryHandler<
      SearchAvailableLocationsForServingQuery,
      Nullable<Location[]>
    >
{
  public constructor(
    private readonly locationsReadableRepo: ILocationsReadableRepo
  ) {}

  public async execute({
    searchQuery,
    country,
    organizationId,
    latitude: lat,
    longitude: lng,
    limit,
    offset,
  }: SearchAvailableLocationsForServingQuery) {
    const query = new QueryBuilder<Location>()
      .equal('organizationId', organizationId)
      .equal('status', LocationStatus.COMPLETE)
      .orderByAlphabetical(['name'])

    if (country) query.equal('country', country)
    if (searchQuery) query.matches(['name', 'address', 'country'], searchQuery)
    if (lat && lng) query.orderByGeo('coordinates', { lat, lng })

    /**
     * @todo Implement location status filter-- (Testing it)
     * @todo Add filters for open locations (Schedules and Holidays)
     */

    return await this.locationsReadableRepo.find(query.getMany(offset, limit))
  }
}
