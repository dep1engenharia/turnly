/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/shared'
import { ILocationsMapper } from 'Locations/Shared/domain/contracts/ILocationsMapper'
import { ILocationsReadableRepo } from 'Locations/Shared/domain/contracts/ILocationsRepo'
import { Location } from 'Locations/Shared/domain/entities/Location'

import { ILocationDocument, LocationModel } from '../models/LocationModel'

export class LocationsReadableRepo
  extends MongoReadableRepo<Location, ILocationDocument>
  implements ILocationsReadableRepo
{
  public constructor(locationsMapper: ILocationsMapper<ILocationDocument>) {
    super(LocationModel, locationsMapper)
  }
}