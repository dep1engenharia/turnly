/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { CustomersMapper } from './infrastructure/mongo/customers.mapper'
import { CustomersReadableRepo } from './infrastructure/mongo/customers-readable.repo'
import { CustomersWritableRepo } from './infrastructure/mongo/customers-writable.repo'

Box.register({
  customersMapper: ioc.asClass(CustomersMapper).singleton(),
  customersReadableRepo: ioc.asClass(CustomersReadableRepo).singleton(),
  customersWritableRepo: ioc.asClass(CustomersWritableRepo).singleton(),
})
