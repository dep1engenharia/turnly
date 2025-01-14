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
import 'fields/shared/shared.dependency'
import 'fields/search-customer-fields-by-service/search-customer-fields-by-service.dependency'

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
import type { Field } from 'fields/shared/domain/entities/field.entity'

export class FieldsModule {
  public static getServer(): Producers.BusinessDataFields.IFieldsServer {
    return {
      findCustomerFieldsByService: (...args) =>
        Box.resolve('searchCustomerFieldsByServiceServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Field> {
    return Box.resolve('fieldsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Field> {
    return Box.resolve('fieldsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve('searchCustomerFieldsByServiceQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
