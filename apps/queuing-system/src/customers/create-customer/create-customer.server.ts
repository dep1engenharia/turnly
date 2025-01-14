/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { CreateCustomerController } from 'customers/create-customer'
import { CustomersMapper } from 'customers/shared/infrastructure/customers-to-grpc.mapper'

export class CreateCustomerServer {
  public constructor(
    private readonly createCustomerController: CreateCustomerController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.CreateCustomerResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.CreateCustomerRequest,
      Producers.QueuingSystem.CreateCustomerResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.CreateCustomerResponse>
  ) {
    const payload = call.request.getCustomer()

    const input = payload
      ? {
          name: payload.getName(),
          lastname: payload.getLastname(),
          email: payload.getEmail(),
          phone: payload.getPhone(),
          country: payload.getCountry(),
          hasWhatsapp: payload.getHasWhatsapp(),
          showNameSignage: payload.getShowNameSignage(),
          extra: payload.getExtrasList().map(e => e.toObject()),
        }
      : {}

    const { data, meta } = await this.createCustomerController.execute({
      extra: [],
      ...input,
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.CreateCustomerResponse()
    const customer = CustomersMapper.toRPC(data)

    response.setData(customer)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
