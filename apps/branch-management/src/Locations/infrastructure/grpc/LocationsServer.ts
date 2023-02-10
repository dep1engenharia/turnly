/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import type { SearchAvailableLocationsForServingController } from 'Locations/features/SearchAvailableLocationsForServing'

import { LocationsMapper } from './LocationsMapper'

export class LocationsServer extends Producers.ServerImplementation<Producers.BranchManagement.ILocationsServer> {
  public constructor(
    private readonly controllers: {
      searchAvailableLocationsForServing: SearchAvailableLocationsForServingController
    }
  ) {
    super()
  }

  @Producers.CallHandler(Producers.BranchManagement.FindLocationsResponse)
  public async searchAvailableLocationsForServing(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.FindLocationsRequest,
      Producers.BranchManagement.FindLocationsResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.FindLocationsResponse>
  ) {
    const { data, meta } =
      await this.controllers.searchAvailableLocationsForServing.execute({
        searchQuery: call.request.getFindQuery(),
        country: call.request.getCountry(),
        latitude: parseFloat(call.request.getLatitude() || '0'),
        longitude: parseFloat(call.request.getLongitude() || '0'),
        limit: call.request.getLimit(),
        offset: call.request.getOffset(),
        organizationId: Client.getOrganizationId(call),
      })

    const response = new Producers.BranchManagement.FindLocationsResponse()
    const locations = data?.map(location => LocationsMapper.toRPC(location))

    if (!locations?.length) throw new ResourceNotFoundException()

    response.setDataList(locations)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      getOne: () => {
        throw new Error('Not implemented')
      },
      find: this.searchAvailableLocationsForServing.bind(this),
    }
  }
}
