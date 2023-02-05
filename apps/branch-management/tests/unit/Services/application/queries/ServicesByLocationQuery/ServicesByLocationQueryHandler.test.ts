/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { ServicesByLocationQueryHandler } from '../../../../../../src/Services/application/queries/ServicesByLocationQuery'
import { ServicesReadableRepo } from '../../../__mocks__/ServicesReadableRepo'
import { ServiceMother } from '../../../domain/ServiceMother'
import { ServicesByLocationQueryMother } from './ServicesByLocationQueryMother'

let repository: ServicesReadableRepo
let handler: ServicesByLocationQueryHandler

describe('services > queries > validates the expected behavior of ServicesByLocationQuery', () => {
  beforeEach(() => {
    repository = new ServicesReadableRepo()
    handler = new ServicesByLocationQueryHandler(repository)
  })

  it('should get a collection of existing services', async () => {
    const query = ServicesByLocationQueryMother.random()

    const expected = ObjectMother.repeater(
      ServiceMother.random,
      ObjectMother.integer(1)
    )

    repository.attachFindResponse(expected)

    const response = await handler.execute(query)

    expect(response).toEqual(expected)
    repository.assertFindHasBeenCalled()
  })
})
