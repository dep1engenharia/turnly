/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  BadRequestException,
  Guid,
  ResourceNotFoundException,
} from '@turnly/common'
import { Events, IRealtimeClient, RealtimeMiddle } from '@turnly/realtime'
import { Event, EventType } from '@turnly/shared'
import { isCommunityEdition } from 'shared/config'

import { Customers, setOrganizationId } from '../../../shared/api'

/**
 * Allow connection guard
 *
 * @description Authorizing connections from widget or external apps,
 * mainly validates that the connection is from a trusted origin.
 *
 * @author Turnly
 */
export class AllowConnGuard {
  /**
   * Middle execute
   *
   * @memberof AllowConnGuard
   */
  public use = (): RealtimeMiddle => async (connection, next) => {
    try {
      const { origin, widgetId, customerId } = this.toParams(connection)

      if (!widgetId || !origin)
        throw new BadRequestException(
          "The request doesn't meet the parameters required for a secure connection."
        )

      const widget = await this.getWidget(widgetId)

      setOrganizationId(widget.organizationId)

      const { data: customer } = customerId
        ? await Customers.getOne({ id: customerId })
        : await Customers.create({})

      if (!customer) throw new ResourceNotFoundException()

      connection.join([widget.organizationId, customer.id])

      connection.emit(
        Events.CONNECTED,
        Event.fromObject({
          type: EventType.INFO,
          name: Events.CONNECTED,
          payload: {
            widget: {
              id: widget.id,
              name: widget.name,
            },
            customer: {
              id: customer.id,
              name: customer.name,
            },
            organizationId: widget.organizationId,
          },
        })
      )

      next()
    } catch (error: any) {
      next(error)
    }
  }

  private toParams(connection: IRealtimeClient) {
    const {
      handshake: { query, headers },
    } = connection

    const origin = headers.origin || headers.referer || ''

    return {
      origin,
      widgetId: query.widgetId as Guid,
      customerId: query.customerId as Guid,
    }
  }

  private async getWidget(_id: Guid) {
    if (isCommunityEdition()) {
      return new Promise<any>(resolve => {
        resolve({
          id: process.env.WIDGET_ID,
          name: process.env.ORGANIZATION_NAME,
          organizationId: process.env.ORGANIZATION_ID,
        })
      })
    }

    // const { meta, data } = await Widgets.getOne({ id })

    // throw new ResourceNotFoundException(meta?.message)
    throw new ResourceNotFoundException()

    // return data
  }
}
