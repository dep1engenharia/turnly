/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes, SharedMessages } from '@turnly/common'
import { ApolloError } from 'apollo-server-express'

export class GraphException extends ApolloError {
  constructor(meta?: Record<string, any>) {
    const data = {
      status: meta?.['status'] ?? ResponseCodes.INTERNAL_ERROR,
      message: meta?.['message'] ?? SharedMessages.UNKNOWN_EXCEPTION,
    }

    super(data.message, GraphException.toGraphCode(data.status), meta)

    Object.defineProperty(this, 'name', { value: 'GraphException' })
  }

  private static toGraphCode(code: ResponseCodes): string {
    const codes = {
      [ResponseCodes.NOT_FOUND]: 'NOT_FOUND',
      [ResponseCodes.BAD_REQUEST]: 'BAD_USER_INPUT',
      [ResponseCodes.UNAUTHORIZED]: 'UNAUTHENTICATED',
      [ResponseCodes.FORBIDDEN]: 'FORBIDDEN',
      [ResponseCodes.CONFLICT]: 'BAD_USER_INPUT',
    }

    return codes[code] ?? 'INTERNAL_SERVER_ERROR'
  }
}
