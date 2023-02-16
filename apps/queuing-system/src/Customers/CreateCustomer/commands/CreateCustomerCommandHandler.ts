/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/shared'
import { ICustomerWritableRepo } from 'Customers/Shared/domain/contracts/ICustomersRepo'
import { Customer } from 'Customers/Shared/domain/entities/Customer'

import { CreateCustomersCommand } from './CreateCustomerCommand'

@CommandHandler(CreateCustomersCommand)
export class CreateCustomerCommandHandler
  implements ICommandHandler<CreateCustomersCommand, Customer>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly customerWritableRepo: ICustomerWritableRepo
  ) {}

  public async execute({ params }: CreateCustomersCommand) {
    const customer = Customer.create(params)

    await this.customerWritableRepo.save(customer)

    this.eventBus.publish(customer.pull())

    return customer
  }
}
