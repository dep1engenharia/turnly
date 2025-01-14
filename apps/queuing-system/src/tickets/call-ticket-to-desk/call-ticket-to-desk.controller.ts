/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Controller,
  ICommandBus,
  InputValidator,
  TimeoutHandler,
} from '@turnly/core'
import { CallTicketToDeskCommand } from 'tickets/call-ticket-to-desk'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { CallTicketToDeskValidator } from './call-ticket-to-desk.validator'

export class CallTicketToDeskController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(CallTicketToDeskValidator)
  public async execute(params: CallTicketToDeskCommand) {
    const ticket = await this.commandBus.execute<
      Ticket,
      CallTicketToDeskCommand
    >(CallTicketToDeskCommand.build(params))

    return this.respond.ok(ticket.toObject())
  }
}
