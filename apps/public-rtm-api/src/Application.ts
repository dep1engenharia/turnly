/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Realtime } from '@turnly/realtime'
import { eventBus } from '@turnly/shared'
import { BroadcastingEventsSubscriber } from 'broadcasting/BroadcastingEventsSubscriber'
import { queuingHandlers } from 'channels/queuing/handlers'
import { AllowConnGuard } from 'channels/queuing/middlewares/AllowConnGuard'
import { Channels, serverOptions } from 'shared/config'

export class Application {
  private readonly realtime: Realtime

  public constructor() {
    this.realtime = new Realtime(serverOptions)
  }

  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    this.setupChannels()
    this.setupBroadcastingEvents()
  }

  /**
   * Sets up channels.
   *
   * @description Create channels and register handlers.
   */
  private setupChannels() {
    this.realtime
      .listen(Channels.QUEUING)
      .use(new AllowConnGuard().use())
      .subscribe(queuingHandlers)
  }

  /**
   * Sets up broadcasting events.
   *
   * @description Register broadcasting subscriber to event bus.
   */
  private setupBroadcastingEvents() {
    const subscriber = new BroadcastingEventsSubscriber(this.realtime)

    eventBus.subscribe([subscriber])
  }
}
