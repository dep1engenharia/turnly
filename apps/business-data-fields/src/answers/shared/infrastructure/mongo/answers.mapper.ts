/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/core'
import { IAnswersMapper } from 'answers/shared/domain/contracts/answers-mapper.interface'
import { Answer } from 'answers/shared/domain/entities/answer.entity'

import { AnswerDocument, AnswerModel } from './answer.model'

export class AnswersMapper implements IAnswersMapper<AnswerDocument> {
  public toEntity(document: AnswerDocument): Answer {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Answer>>()

    return Answer.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Answer): AnswerDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new AnswerModel({ ...attrs, _id })
  }

  public toEntityList(documents: AnswerDocument[]): Answer[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Answer[]): AnswerDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
