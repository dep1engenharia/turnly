import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  ICommandBus,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import {
  CreateCustomerParams,
  CreateCustomersCommand,
} from 'Customers/application/commands/CreateCustomerCommand'
import { CustomerByIdQuery } from 'Customers/application/queries/CustomerByIdQuery'
import { Customer } from 'Customers/domain/entities/Customer'

import { validator } from '../validators/CustomerValidator'

export class CustomersController extends Controller {
  public constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus
  ) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.create)
  public async create(params: CreateCustomerParams) {
    const customer = await this.commandBus.execute<
      CreateCustomersCommand,
      Customer
    >(new CreateCustomersCommand(params))

    return this.respond.created(customer.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async get(params: CustomerByIdQuery) {
    const customer = await this.queryBus.ask<
      CustomerByIdQuery,
      Nullable<Customer>
    >(new CustomerByIdQuery(params.id, params.companyId))

    if (!customer) throw new ResourceNotFoundException()

    return this.respond.ok(customer.toObject())
  }
}