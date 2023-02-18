/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/shared'

const extra = Validator.object({
  key: Validator.string(),
  value: Validator.string(),
})

export const CreateCustomerValidator = Validator.object({
  name: Validator.string().optional(),
  lastname: Validator.string().optional(),
  email: Validator.email().optional(),
  country: Validator.string().optional(),
  phone: Validator.string().optional(),
  hasWhatsapp: Validator.getBuilder().boolean().optional(),
  showNameSignage: Validator.getBuilder().boolean().optional(),
  organizationId: Validator.isId(),
  extra: Validator.getBuilder().array().items(extra).optional(),
})
