/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/core'
import { ICustomersWritableRepo } from 'customers/shared/domain/contracts/customers-repo.interface'
import { Customer } from 'customers/shared/domain/entities/customer.entity'

import { CreateCustomersCommand } from './create-customer.command'

@CommandHandler(CreateCustomersCommand)
export class CreateCustomerCommandHandler
  implements ICommandHandler<CreateCustomersCommand, Customer>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly customersWritableRepo: ICustomersWritableRepo
  ) {}

  public async execute(command: CreateCustomersCommand) {
    const customer = Customer.create(command)

    await this.customersWritableRepo.save(customer)

    this.eventBus.publish(customer.pull())

    return customer
  }
}
