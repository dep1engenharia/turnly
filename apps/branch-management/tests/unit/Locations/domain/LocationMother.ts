/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'
import { LocationStatus } from 'Locations/Shared/domain/enums/LocationStatus'

import { Location } from '../../../../src/Locations/Shared/domain/entities/Location'

export class LocationMother {
  static create(
    name: string = ObjectMother.names(),
    address: string = ObjectMother.word(),
    status: LocationStatus = LocationStatus.COMPLETE,
    coordinates = ObjectMother.coords(),
    country: string = ObjectMother.names(),
    stopServingBeforeInMinutes: number = ObjectMother.integer(2),
    organizationId: Guid = ObjectMother.uuid('org')
  ): Location {
    return Location.create({
      organizationId,
      name,
      address,
      status,
      coordinates,
      stopServingBeforeInMinutes,
      country,
    })
  }

  static random(): Location {
    return LocationMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Location[] {
    return ObjectMother.repeater(LocationMother.random, max)
  }
}