/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

export class OrganizationsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Organization>> | undefined
  ): Producers.BusinessManagement.Organization {
    const organization = new Producers.BusinessManagement.Organization()

    if (entity) {
      organization.setId(entity.id)
      organization.setName(entity.name)
      organization.setSubdomain(entity.subdomain)
    }

    return organization
  }
}
