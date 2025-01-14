/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Nullable } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { CreateCustomersCommand } from '../../../../src/customers/create-customer'
import { GetOneCustomerQuery } from '../../../../src/customers/get-one-customer'
import { Customer } from '../../../../src/customers/shared/domain/entities/customer.entity'

export class CustomerMother {
  static create(
    name: string = ObjectMother.names(),
    lastname: string = ObjectMother.names(),
    email: string = ObjectMother.email(),
    phone: string = ObjectMother.phone(),
    country: string = ObjectMother.names(),
    hasWhatsapp = true,
    showNameSignage = true,
    organizationId: Guid = ObjectMother.uuid('org'),
    extra: Nullable<Extra[]> = []
  ): Customer {
    return Customer.create({
      name,
      lastname,
      email,
      phone,
      country,
      hasWhatsapp,
      showNameSignage,
      organizationId,
      extra,
    })
  }

  static random(): Customer {
    return CustomerMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Customer[] {
    return ObjectMother.repeater(CustomerMother.random, max)
  }

  static fromCommand(command: CreateCustomersCommand): Customer {
    return CustomerMother.create(
      command.name,
      undefined,
      undefined,
      undefined,
      undefined,
      command.hasWhatsapp,
      command.showNameSignage,
      command.organizationId,
      command.extra
    )
  }

  static fromExistingCustomerOnQuery(
    query: GetOneCustomerQuery | { organizationId: Guid; id: Guid }
  ): Customer {
    return Customer.build({
      ...this.random().toObject(),
      organizationId: query.organizationId,
      id: query.id,
    })
  }

  static withExtra(
    extra: Extra[] = [
      ObjectMother.extra(),
      ObjectMother.extra(),
      ObjectMother.extra(),
    ]
  ): Customer {
    return this.create(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      extra
    )
  }
}
