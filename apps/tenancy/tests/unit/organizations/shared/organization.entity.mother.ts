/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'
import { OrganizationPlans } from 'organizations/shared/domain/enums/organization-plans.enum'
import { OrganizationStatus } from 'organizations/shared/domain/enums/organization-status.enum'

import { GetOneOrganizationQuery } from '../../../../src/organizations/get-one-organization'
import { GetOrganizationBySubdomainQuery } from '../../../../src/organizations/get-organization-by-subdomain'
import { Organization } from '../../../../src/organizations/shared/domain/entities/organization.entity'

export class OrganizationMother {
  static create(
    name: string = ObjectMother.names(),
    status: OrganizationStatus = OrganizationStatus.ACTIVE,
    subdomain: string = ObjectMother.uuid('sub')
  ): Organization {
    return Organization.create({
      name,
      status,
      subdomain,
      plan: OrganizationPlans.OPEN_SOURCE,
      brandingLogo: '',
      disabledTelemetry: false,
      brandingPrimaryColor: '',
      brandingSecondaryColor: '',
      brandingPrimaryBackground: '',
      brandingSecondaryBackground: '',
      brandingDesignType: '',
    })
  }

  static random(): Organization {
    return OrganizationMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Organization[] {
    return ObjectMother.repeater(OrganizationMother.random, max)
  }

  static fromExistingOrganizationOnQuery(
    query: GetOneOrganizationQuery
  ): Organization {
    return Organization.build({
      ...this.random().toObject(),
      id: query.id,
    })
  }

  static fromExistingOrganizationOnQueryBySubdomain(
    query: GetOrganizationBySubdomainQuery
  ): Organization {
    return Organization.build({
      ...this.random().toObject(),
      subdomain: query.subdomain,
    })
  }
}
