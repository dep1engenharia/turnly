/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IWritableRepository } from '@turnly/core'
import { TestWritableRepo } from '@turnly/testing'
import { Customer } from 'customers/shared/domain/entities/customer.entity'

export class CustomersWritableRepo
  extends TestWritableRepo<Customer>
  implements IWritableRepository<Customer> {}
