/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Response } from '@turnly/common'

import { AbstractExceptionHandler } from '../abstract-exception.handler'
import { RequestTimeoutException } from '../exceptions'

export class RequestTimeoutHandler<
  E = RequestTimeoutException
> extends AbstractExceptionHandler<E> {
  public toResponse() {
    return Response.timeout(this.message)
  }

  public isExceptionOf(): boolean {
    return this.exception instanceof RequestTimeoutException
  }

  public override isTrusted() {
    return false
  }
}