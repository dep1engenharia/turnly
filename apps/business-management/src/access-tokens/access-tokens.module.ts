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
import 'access-tokens/shared/shared.dependency'
import 'access-tokens/get-one-access-token/get-one-access-token.dependency'
import 'access-tokens/create-access-token/create-access-token.dependency'

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
import type { AccessToken } from 'access-tokens/shared/domain/entity/access-token.entity'

export class AccessTokensModule {
  public static getServer(): Producers.BusinessManagement.IAccessTokensServer {
    return {
      getOne: (...args) =>
        Box.resolve('getOneAccessTokenServer').execute(...args),
      create: (...args) =>
        Box.resolve('createAccessTokenServer').execute(...args),
      exchange: () => {
        throw new Error('Not implemented')
      },
    }
  }

  public static getWritableRepo(): IWritableRepository<AccessToken> {
    return Box.resolve('accessTokensWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<AccessToken> {
    return Box.resolve('accessTokensReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve('getOneAccessTokenQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [Box.resolve('createAccessTokenCommandHandler')]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
