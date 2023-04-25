/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { Client } from '@turnly/grpc/dist/consumers'
import { ReturnTicketToQueueController } from 'tickets/return-ticket-to-queue'
import { TicketsMapper } from 'tickets/shared/infrastructure/grpc/tickets-mapper.grpc'

export class ReturnTicketToQueueServer {
  public constructor(
    private readonly returnTicketToQueueController: ReturnTicketToQueueController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.ReturnToQueueResponse)
  public async returnToQueue(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.ReturnToQueueRequest,
      Producers.QueuingSystem.ReturnToQueueResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.ReturnToQueueResponse>
  ) {
    const { data, meta } = await this.returnTicketToQueueController.execute({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.ReturnToQueueResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
