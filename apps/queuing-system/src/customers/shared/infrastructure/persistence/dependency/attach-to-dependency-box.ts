/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { CustomersMapper } from '../mongo/entity-model-mappers/customers.mapper'
import { CustomersReadableRepo } from '../mongo/repositories/customers-readable.repo'
import { CustomersWritableRepo } from '../mongo/repositories/customers-writable.repo'

Box.register({
  customersMapper: ioc.asClass(CustomersMapper).singleton(),
  customersReadableRepo: ioc.asClass(CustomersReadableRepo).singleton(),
  customersWritableRepo: ioc.asClass(CustomersWritableRepo).singleton(),
})
