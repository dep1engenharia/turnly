/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { EntityTypes } from 'answers/shared/domain/enums/entity-type.enum'
import { AnswersMapper } from 'answers/shared/infrastructure/answers-to-grpc.mapper'

import { CreateAnswersBulkController } from './create-answers-bulk.controller'

export class CreateAnswersBulkServer {
  public constructor(
    private readonly createAnswersBulkController: CreateAnswersBulkController
  ) {}

  @Producers.CallHandler(Producers.BusinessDataFields.CreateAnswersResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BusinessDataFields.CreateAnswersRequest,
      Producers.BusinessDataFields.CreateAnswersResponse
    >,
    callback: Producers.ICallback<Producers.BusinessDataFields.CreateAnswersResponse>
  ) {
    const answers = call.request.getAnswersList().map(answer => {
      const { extrasList: extra, ...data } = answer.toObject()

      return {
        ...data,
        entityType: answer.getEntityType() as EntityTypes,
        extra,
      }
    })

    const { data, meta } = await this.createAnswersBulkController.execute({
      answers,
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.BusinessDataFields.CreateAnswersResponse()

    if (data) response.setDataList(data.map(AnswersMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
