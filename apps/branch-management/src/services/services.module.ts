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
import 'services/shared/shared.dependency'
import 'services/get-one-service/get-one-service.dependency'
import 'services/list-services-of-one-location/list-services-of-one-location.dependency'

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
import type { Service } from 'services/shared/domain/entities/service.entity'

export class ServicesModule {
  public static getServer(): Producers.BranchManagement.IServicesServer {
    return {
      getOne: (...args) => Box.resolve('getOneServiceServer').execute(...args),
      listServicesOfOneLocation: (...args) =>
        Box.resolve('listServicesOfOneLocationServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Service> {
    return Box.resolve('servicesWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Service> {
    return Box.resolve('servicesReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve('listServicesOfOneLocationQueryHandler'),
      Box.resolve('getOneServiceQueryHandler'),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
