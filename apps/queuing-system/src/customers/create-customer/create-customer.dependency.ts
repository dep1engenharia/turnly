/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { CreateCustomerCommandHandler } from './create-customer.command-handler'
import { CreateCustomerController } from './create-customer.controller'
import { CreateCustomerServer } from './create-customer.server'

Box.register({
  createCustomerServer: ioc.asClass(CreateCustomerServer).singleton(),
  createCustomerController: ioc.asClass(CreateCustomerController).singleton(),
  createCustomerCommandHandler: ioc
    .asClass(CreateCustomerCommandHandler)
    .singleton(),
})
