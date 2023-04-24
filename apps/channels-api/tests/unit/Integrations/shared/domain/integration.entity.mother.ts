/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'
import { IntegrationStatus } from 'Integrations/shared/domain/enums/integration-status.enum'

import { GetOneIntegrationQuery } from '../../../../../src/Integrations/shared/application/queries'
import { Integration } from '../../../../../src/integrations/shared/domain/entities/integration.entity'

export class IntegrationMother {
  static create(
    name: string = ObjectMother.names(),
    status: IntegrationStatus = IntegrationStatus.ACTIVE,
    origins: string[] = [ObjectMother.names(), ObjectMother.names()],
    organizationId: Guid = ObjectMother.uuid('org')
  ): Integration {
    return Integration.create({
      name,
      status,
      origins,
      organizationId,
    })
  }

  static random(): Integration {
    return IntegrationMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Integration[] {
    return ObjectMother.repeater(IntegrationMother.random, max)
  }

  static fromExistingIntegrationOnQuery(
    query: GetOneIntegrationQuery
  ): Integration {
    return Integration.build({
      ...this.random().toObject(),
      id: query.id,
    })
  }
}
