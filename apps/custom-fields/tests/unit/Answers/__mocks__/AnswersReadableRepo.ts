/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/shared'
import { TestReadableRepo } from '@turnly/testing'
import { Answer } from 'Answers/domain/entities/Answer'

export class AnswersReadableRepo
  extends TestReadableRepo<Answer>
  implements IReadableRepository<Answer> {}
