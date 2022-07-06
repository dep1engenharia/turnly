/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'
import { LocationByIdQueryHandler } from 'Locations/application/queries/LocationByIdQuery'

import { LocationsController } from '../api/controllers/LocationsController'
import { LocationsMapper } from '../persistence/mongo/entity-model-mappers/LocationsMapper'
import { LocationsReadableRepo } from '../persistence/mongo/repositories/LocationsReadableRepo'
import { LocationsWritableRepo } from '../persistence/mongo/repositories/LocationsWritableRepo'

Box.register({
  locationsMapper: ioc.asClass(LocationsMapper).singleton(),
  locationsReadableRepo: ioc.asClass(LocationsReadableRepo).singleton(),
  locationsWritableRepo: ioc.asClass(LocationsWritableRepo).singleton(),
  locationsController: ioc.asClass(LocationsController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  locationByIdQueryHandler: ioc.asClass(LocationByIdQueryHandler).singleton(),
})
