/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { SearchCustomerFieldsByServiceQueryHandler } from '../../../../src/fields/search-customer-fields-by-service'
import { FieldMother } from '../shared/field.entity.mother'
import { FieldsReadableRepo } from '../shared/fields-readable.repo'
import { SearchCustomerFieldsByServiceQueryMother } from './search-customer-fields-by-service.query.mother'

let repository: FieldsReadableRepo
let handler: SearchCustomerFieldsByServiceQueryHandler

describe('fields > queries > validates the expected behavior of SearchCustomerFieldsByServiceQuery', () => {
  beforeEach(() => {
    repository = new FieldsReadableRepo()
    handler = new SearchCustomerFieldsByServiceQueryHandler(repository)
  })

  it('should get a collection of existing fields', async () => {
    const query = SearchCustomerFieldsByServiceQueryMother.random()

    const expected = ObjectMother.repeater(
      FieldMother.random,
      ObjectMother.integer(1)
    )

    repository.attachFindResponse(expected)

    const response = await handler.execute(query)

    expect(response).toEqual(expected)
    repository.assertFindHasBeenCalled()
  })
})
