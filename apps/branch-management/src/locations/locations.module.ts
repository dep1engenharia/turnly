/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Dependencies
 *
 * @description Register dependencies to the dependency injection container.
 */
import 'locations/shared/shared.dependency'
import 'locations/search-available-locations-for-serving/search-available-locations-for-serving.dependency'
import 'locations/get-one-location/get-one-location.dependency'
import 'locations/get-location-ready-for-serving/get-location-ready-for-serving.dependency'

import type {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/core'
import { Box } from '@turnly/core'
/**
 * Module
 *
 * @description Module definition.
 */
import type { Producers } from '@turnly/grpc'
import type { Location } from 'locations/shared/domain/entities/location.entity'

export class LocationsModule {
  public static getServer(): Producers.BranchManagement.ILocationsServer {
    return {
      getOne: (...args) => Box.resolve('getOneLocationServer').execute(...args),
      searchAvailableLocationsForServing: (...args) =>
        Box.resolve('searchAvailableLocationsForServingServer').execute(
          ...args
        ),
      getReadyForServing: (...args) =>
        Box.resolve('getLocationReadyForServingServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Location> {
    return Box.resolve('locationsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Location> {
    return Box.resolve('locationsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve('searchAvailableLocationsForServingQueryHandler'),
      Box.resolve('getOneLocationQueryHandler'),
      Box.resolve('getLocationReadyForServingQueryHandler'),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
