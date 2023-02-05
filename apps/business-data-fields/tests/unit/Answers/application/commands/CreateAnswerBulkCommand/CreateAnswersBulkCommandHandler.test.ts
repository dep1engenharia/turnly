/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { TestEventBus } from '@turnly/testing'

import { CreateAnswerBulkCommandHandler } from '../../../../../../src/Answers/application/commands/CreateAnswerBulkCommand'
import { AnswersWritableRepo } from '../../../__mocks__/AnswersWritableRepo'
import { CreateAnswersBulkCommandMother } from './CreateAnswersBulkCommandMother'

let repository: AnswersWritableRepo
let eventBus: TestEventBus
let handler: CreateAnswerBulkCommandHandler

describe('answers > commands > validates the expected behavior on answer creation', () => {
  beforeEach(() => {
    eventBus = new TestEventBus()
    repository = new AnswersWritableRepo()
    handler = new CreateAnswerBulkCommandHandler(eventBus, repository)
  })

  it('should create answers in bulk from a collection of raw answers', async () => {
    const command = CreateAnswersBulkCommandMother.random()
    const answers = await handler.execute(command)

    repository.assertSaveHasBeenCalledWith(answers)
    eventBus.assertPublishCalled()
  })
})
