/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ActionNotAllowedException } from '@turnly/common'
import { IRealtimeClient, RealtimeMiddle } from '@turnly/realtime'

/**
 * Allow connection guard
 *
 * @description Authorizing connections from microservices.
 * @author Turnly
 */
export class AuthorizedConnGuard {
  /**
   * Middle execute
   *
   * @memberof InternalConnGuard
   */
  public use = (): RealtimeMiddle => async (connection, next) => {
    try {
      throw new ActionNotAllowedException(
        'The streaming channel is temporarily unavailable.'
      )

      /**
       * @todo Implement authorization
       */
      next()
    } catch (error: any) {
      next(error)
    }
  }

  private toParams(connection: IRealtimeClient) {
    const {
      handshake: { headers },
    } = connection

    return {
      authorization: headers.authorization || '',
    }
  }
}
