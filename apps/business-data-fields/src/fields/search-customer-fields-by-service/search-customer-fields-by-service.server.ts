/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import type { SearchCustomerFieldsByServiceController } from 'fields/search-customer-fields-by-service'
import { FieldsMapper } from 'fields/shared/infrastructure/fields-to-grpc.mapper'

export class SearchCustomerFieldsByServiceServer {
  public constructor(
    private readonly searchCustomerFieldsByServiceController: SearchCustomerFieldsByServiceController
  ) {}

  @Producers.CallHandler(
    Producers.BusinessDataFields.FindCustomerFieldsByServiceResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BusinessDataFields.FindCustomerFieldsByServiceRequest,
      Producers.BusinessDataFields.FindCustomerFieldsByServiceResponse
    >,
    callback: Producers.ICallback<Producers.BusinessDataFields.FindCustomerFieldsByServiceResponse>
  ) {
    const { data, meta } =
      await this.searchCustomerFieldsByServiceController.execute({
        serviceId: call.request.getServiceId(),
        organizationId: Consumers.Client.getOrganizationId(call),
      })

    const response =
      new Producers.BusinessDataFields.FindCustomerFieldsByServiceResponse()

    if (data) response.setDataList(data.map(FieldsMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
