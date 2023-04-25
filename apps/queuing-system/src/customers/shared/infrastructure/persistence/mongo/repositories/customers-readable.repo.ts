/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { ICustomersMapper } from 'customers/shared/domain/contracts/customers-mapper.interface'
import { ICustomerReadableRepo } from 'customers/shared/domain/contracts/customers-repo.interface'
import { Customer } from 'customers/shared/domain/entities/customer.entity'

import { CustomerDocument, CustomerModel } from '../models/customer.model'

export class CustomersReadableRepo
  extends MongoReadableRepo<Customer, CustomerDocument>
  implements ICustomerReadableRepo
{
  public constructor(customersMapper: ICustomersMapper<CustomerDocument>) {
    super(CustomerModel, customersMapper)
  }
}
