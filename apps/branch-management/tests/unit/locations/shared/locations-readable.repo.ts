/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/core'
import { TestReadableRepo } from '@turnly/testing'
import { Location } from 'locations/shared/domain/entities/location.entity'

export class LocationsReadableRepo
  extends TestReadableRepo<Location>
  implements IReadableRepository<Location> {}
