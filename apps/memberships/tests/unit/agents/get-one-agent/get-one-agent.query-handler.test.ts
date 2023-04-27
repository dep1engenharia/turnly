/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetOneAgentQueryHandler } from '../../../../src/agents/get-one-agent'
import { AgentMother } from '../shared/agent.entity.mother'
import { AgentsReadableRepo } from '../shared/agents-readable.repo'
import { GetOneAgentQueryMother } from './get-one-agent.query.mother'

let repository: AgentsReadableRepo
let handler: GetOneAgentQueryHandler

describe('agents > queries > validates the expected behavior of AgentByIdQuery', () => {
  beforeEach(() => {
    repository = new AgentsReadableRepo()
    handler = new GetOneAgentQueryHandler(repository)
  })

  it('should get an existing agent', async () => {
    const query = GetOneAgentQueryMother.random()
    const agent = AgentMother.fromExistingAgentOnQuery(query)

    repository.attachGetOneResponse(agent)

    const response = await handler.execute(query)

    expect(response).toEqual(agent)
    repository.assertGetOneHasBeenCalled()
  })
})