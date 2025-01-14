/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import type { ListServicesOfOneLocationController } from 'services/list-services-of-one-location'
import { ServicesMapper } from 'services/shared/infrastructure/services-to-grpc.mapper'

export class ListServicesOfOneLocationServer {
  public constructor(
    private readonly listServicesOfOneLocationController: ListServicesOfOneLocationController
  ) {}

  @Producers.CallHandler(
    Producers.BranchManagement.ListServicesOfOneLocationResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.ListServicesOfOneLocationRequest,
      Producers.BranchManagement.ListServicesOfOneLocationResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.ListServicesOfOneLocationResponse>
  ) {
    const { data, meta } =
      await this.listServicesOfOneLocationController.execute({
        locationId: call.request.getLocationId(),
        organizationId: Consumers.Client.getOrganizationId(call),
      })

    const response =
      new Producers.BranchManagement.ListServicesOfOneLocationResponse()

    if (data) response.setDataList(data.map(ServicesMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
