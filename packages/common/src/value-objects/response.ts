/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  ExceptionMessages,
  ResponseCodes,
  ResponseMessages,
  SharedMessages,
} from '../constants'
import { Nullable } from '../types/nullable'

/**
 * Response
 *
 * @description This class contains helper methods to build response objects.
 *
 * @class Response
 * @template T
 *
 * @author Turnly
 */
export class Response<T> {
  private constructor(
    public readonly meta: {
      /**
       * Response status code.
       *
       * @type {ResponseCodes}
       */
      status: ResponseCodes

      /**
       * Response optional title.
       *
       * @type {(Nullable<string>)}
       * @memberof Response
       */
      title?: Nullable<string>

      /**
       * Response optional message.
       *
       * @type {(Nullable<string>)}
       * @memberof Response
       */
      message?: Nullable<string>

      /**
       * Indicate if the request was completed successfully based on the response codes.
       *
       * @type {boolean}
       * @memberof Response
       */
      success?: boolean

      /**
       * Right now timestamp.
       *
       * @memberof Response
       */
      timestamp?: number

      /**
       * Response details.
       *
       * @type {(Nullable<unknown[]>)}
       */
      errors?: Nullable<
        {
          parameter?: string
          message: string
        }[]
      >
    },

    /**
     * Response content.
     *
     * @type {(Nullable<T>)}
     */
    public readonly data?: Nullable<T>
  ) {
    this.meta.timestamp = Date.now()

    this.meta.success =
      this.meta.status >= ResponseCodes.OK &&
      this.meta.status < ResponseCodes.BAD_REQUEST
  }

  /**
   * Responds with 'OK'
   *
   * @static
   * @template T
   * @memberof Response
   */
  public static ok<T>(data?: T, message?: string): Response<T> {
    return new Response(
      {
        status: ResponseCodes.OK,
        message,
      },
      data
    )
  }

  /**
   * Responds with 'CREATED'
   *
   * @static
   * @template T
   * @memberof Response
   */
  public static created<T>(data?: T, message?: string): Response<T> {
    return new Response(
      {
        status: ResponseCodes.CREATED,
        message,
      },
      data
    )
  }

  /**
   * Responds with 'ACCEPTED'
   *
   * @static
   * @memberof Response
   */
  public static accepted(
    message?: string,
    title: string = ResponseMessages.ACCEPTED_TITLE
  ): Response<null> {
    return new Response({
      status: ResponseCodes.ACCEPTED,
      title,
      message,
    })
  }

  /**
   * Responds with 'NO_CONTENT'
   *
   * @static
   * @memberof Response
   */
  public static noContent(
    title: string = ResponseMessages.NO_CONTENT_TITLE
  ): Response<null> {
    return new Response({
      status: ResponseCodes.NO_CONTENT,
      title,
    })
  }

  /**
   * Responds with 'BAD_REQUEST'
   *
   * @static
   * @memberof Response
   */
  public static badRequest(
    message?: string,
    errors?: {
      parameter?: string
      message: string
    }[],
    title: string = ResponseMessages.BAD_REQUEST_TITLE
  ): Response<undefined> {
    return new Response({
      status: ResponseCodes.BAD_REQUEST,
      title,
      message,
      errors,
    })
  }

  /**
   * Responds with 'UNAUTHORIZED'
   *
   * @static
   * @memberof Response
   */
  public static unauthorized(
    message: string,
    title: string = ResponseMessages.UNAUTHORIZED_TITLE
  ): Response<null> {
    return new Response({
      status: ResponseCodes.UNAUTHORIZED,
      title,
      message,
    })
  }

  /**
   *Responds with 'FORBIDDEN'
   *
   * @static
   * @memberof Response
   */
  public static forbidden(
    message: string,
    title: string = ResponseMessages.FORBIDDEN_TITLE
  ): Response<null> {
    return new Response({
      status: ResponseCodes.FORBIDDEN,
      title,
      message,
    })
  }

  /**
   * Responds with 'NOT_FOUND'
   *
   * @static
   * @memberof Response
   */
  public static notFound(
    message: string,
    title: string = ResponseMessages.NOT_FOUND_TITLE
  ): Response<null> {
    return new Response({
      status: ResponseCodes.NOT_FOUND,
      title,
      message,
    })
  }

  /**
   * Responds with 'NOT_ACCEPTABLE'
   *
   * @static
   * @memberof Response
   */
  public static notAcceptable(
    message: string,
    title: string = ResponseMessages.NOT_ACCEPTABLE_TITLE
  ): Response<null> {
    return new Response({
      status: ResponseCodes.NOT_ACCEPTABLE,
      title,
      message,
    })
  }

  /**
   * Responds with 'CONFLICT'
   *
   * @static
   * @memberof Response
   */
  public static conflict(
    message: string,
    title: string = ResponseMessages.CONFLICT_TITLE
  ): Response<null> {
    return new Response({
      status: ResponseCodes.CONFLICT,
      title,
      message,
    })
  }

  /**
   * Responds with 'UNPROCESSABLE'
   *
   * @static
   * @memberof Response
   */
  public static unprocessable(
    message: string,
    title: string = ResponseMessages.UNPROCESSABLE_TITLE
  ): Response<null> {
    return new Response({
      status: ResponseCodes.UNPROCESSABLE,
      title,
      message,
    })
  }

  /**
   * Responds with 'REQUEST_TIMEOUT'
   *
   * @static
   * @memberof Response
   */
  public static timeout(
    message: string = ExceptionMessages.REQUEST_TIMEOUT,
    title: string = ResponseMessages.REQUEST_TIMEOUT_TITLE
  ): Response<null> {
    return new Response({
      status: ResponseCodes.REQUEST_TIMEOUT,
      title,
      message,
    })
  }

  /**
   * Responds with 'INVALID STATE'
   *
   * @static
   * @memberof Response
   */
  public static invalidState(
    message: string,
    title: string = ResponseMessages.INVALID_STATE_TITLE
  ): Response<null> {
    const status = ResponseCodes.CONFLICT

    return new Response({
      status,
      title,
      message,
    })
  }

  /**
   * Responds with 'TOO_MANY_REQUESTS'
   *
   * @static
   * @memberof Response
   */
  public static tooManyRequests(
    message: string = ExceptionMessages.TOO_MANY_REQUESTS,
    title: string = ResponseMessages.TOO_MANY_REQUESTS
  ): Response<null> {
    return new Response({
      status: ResponseCodes.TOO_MANY_REQUESTS,
      title,
      message,
    })
  }

  /**
   * Responds with 'SERVICE_UNAVAILABLE'
   *
   * @static
   * @memberof Response
   */
  public static serviceUnavailable(
    message: string = ExceptionMessages.SERVICE_UNAVAILABLE,
    title: string = ResponseMessages.SERVICE_UNAVAILABLE
  ): Response<null> {
    return new Response({
      status: ResponseCodes.SERVICE_UNAVAILABLE,
      title,
      message,
    })
  }

  /**
   * Responds with 'INTERNAL_ERROR'
   *
   * @static
   * @memberof Response
   */
  public static error(
    message: string = SharedMessages.UNKNOWN_EXCEPTION,
    title: string = ResponseMessages.INTERNAL_ERROR_TITLE
  ): Response<null> {
    return new Response({
      status: ResponseCodes.INTERNAL_ERROR,
      title,
      message,
    })
  }
}