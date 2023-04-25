/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/core'
import { Customer } from 'customers/shared/domain/entities/customer.entity'

export type ICustomersMapper<Model> = IEntityMapper<Customer, Model>
