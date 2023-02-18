/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { config } from '@turnly/shared'
import { AnswersModule } from 'eanswers/answers.module'
import { FieldsModule } from 'efields/fields.module'

/**
 * Services (gRPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services: Producers.Service[] = [
  {
    definition: Producers.BusinessDataFields.AnswersService,
    implementation: AnswersModule.getServer(),
  },
  {
    definition: Producers.BusinessDataFields.FieldsService,
    implementation: FieldsModule.getServer(),
  },
]

const port = config.get('server.port')

export const server = new Producers.Server({ port, services })
