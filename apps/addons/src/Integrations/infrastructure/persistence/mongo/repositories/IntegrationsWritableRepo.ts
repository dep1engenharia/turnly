/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { IIntegrationsMapper } from 'Integrations/domain/contracts/IIntegrationsMapper'
import { IIntegrationsWritableRepo } from 'Integrations/domain/contracts/IIntegrationsRepo'
import { Integration } from 'Integrations/domain/entities/Integration'

import {
  IIntegrationDocument,
  IntegrationModel,
} from '../models/IntegrationModel'

export class IntegrationsWritableRepo
  extends MongoWritableRepo<Integration, IIntegrationDocument>
  implements IIntegrationsWritableRepo
{
  public constructor(
    integrationsMapper: IIntegrationsMapper<IIntegrationDocument>
  ) {
    super(IntegrationModel, integrationsMapper)
  }
}