/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'
import { Location } from 'Locations/Shared/domain/entities/Location'

export class LocationsReadableRepo
  extends TestReadableRepo<Location>
  implements IReadableRepository<Location> {}