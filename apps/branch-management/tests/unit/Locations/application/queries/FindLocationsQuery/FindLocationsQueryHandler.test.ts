/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { FindLocationsQueryHandler } from '../../../../../../src/Locations/application/queries/FindLocationsQuery'
import { LocationsReadableRepo } from '../../../__mocks__/LocationsReadableRepo'
import { LocationMother } from '../../../domain/LocationMother'
import { FindLocationsQueryMother } from './FindLocationsQueryMother'

let repository: LocationsReadableRepo
let handler: FindLocationsQueryHandler

describe('locations > queries > validates the expected behavior of FindLocationsQuery', () => {
  beforeEach(() => {
    repository = new LocationsReadableRepo()
    handler = new FindLocationsQueryHandler(repository)
  })

  it('should get a collection of existing locations', async () => {
    const query = FindLocationsQueryMother.random()

    const expected = ObjectMother.repeater(
      LocationMother.random,
      ObjectMother.integer(1)
    )

    repository.attachFindResponse(expected)

    const response = await handler.execute(query)

    expect(response).toEqual(expected)
    repository.assertFindHasBeenCalled()
  })
})
