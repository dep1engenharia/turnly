/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { AgentByIdQuery } from 'Agents/application/queries/AgentByIdQuery'
import { AgentByUserIdQuery } from 'Agents/application/queries/AgentByUserIdQuery'
import { Agent } from 'Agents/domain/entities/Agent'

import { validator } from '../validators/AgentsValidator'

export class AgentsController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async getOne(params: AgentByIdQuery) {
    const agent = await this.queryBus.ask<Nullable<Agent>>(
      new AgentByIdQuery(params.id, params.organizationId)
    )

    if (!agent) throw new ResourceNotFoundException()

    return this.respond.ok(agent.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.getByUserId)
  public async getByUserId(params: AgentByUserIdQuery) {
    const agent = await this.queryBus.ask<Nullable<Agent>>(
      new AgentByUserIdQuery(params.userId)
    )

    if (!agent) throw new ResourceNotFoundException()

    return this.respond.ok(agent.toObject())
  }
}
