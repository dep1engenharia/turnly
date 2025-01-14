/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/core'
import { ICustomersMapper } from 'customers/shared/domain/contracts/customers-mapper.interface'
import { Customer } from 'customers/shared/domain/entities/customer.entity'

import { CustomerDocument, CustomerModel } from './customer.model'

export class CustomersMapper implements ICustomersMapper<CustomerDocument> {
  public toEntity(document: CustomerDocument): Customer {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Customer>>()

    return Customer.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Customer): CustomerDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new CustomerModel({ ...attrs, _id })
  }

  public toEntityList(documents: CustomerDocument[]): Customer[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Customer[]): CustomerDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
