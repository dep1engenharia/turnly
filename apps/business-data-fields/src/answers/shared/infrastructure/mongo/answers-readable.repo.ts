/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { IAnswersMapper } from 'answers/shared/domain/contracts/answers-mapper.interface'
import { IAnswersReadableRepo } from 'answers/shared/domain/contracts/answers-repo.interface'
import { Answer } from 'answers/shared/domain/entities/answer.entity'

import { AnswerDocument, AnswerModel } from './answer.model'

export class AnswersReadableRepo
  extends MongoReadableRepo<Answer, AnswerDocument>
  implements IAnswersReadableRepo
{
  public constructor(answersMapper: IAnswersMapper<AnswerDocument>) {
    super(AnswerModel, answersMapper)
  }
}
