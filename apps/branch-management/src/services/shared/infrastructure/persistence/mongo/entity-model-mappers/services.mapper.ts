/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/core'
import { IServicesMapper } from 'services/shared/domain/contracts/services-mapper.interface'
import { Service } from 'services/shared/domain/entities/service.entity'

import { IServiceDocument, ServiceModel } from '../models/service.model'

export class ServicesMapper implements IServicesMapper<IServiceDocument> {
  public toEntity(document: IServiceDocument): Service {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Service>>()

    return Service.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Service): IServiceDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new ServiceModel({ ...attrs, _id })
  }

  public toEntityList(documents: IServiceDocument[]): Service[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Service[]): IServiceDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
