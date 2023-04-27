/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { IOrganizationsReadableRepo } from 'organizations/shared/domain/contracts/organizations-repo.interface'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

import { GetOrganizationBySubdomainQuery } from './get-organization-by-subdomain.query'

@QueryHandler(GetOrganizationBySubdomainQuery)
export class GetOrganizationBySubdomainQueryHandler
  implements
    IQueryHandler<GetOrganizationBySubdomainQuery, Nullable<Organization>>
{
  public constructor(
    private readonly organizationsReadableRepo: IOrganizationsReadableRepo
  ) {}

  public async execute({ subdomain }: GetOrganizationBySubdomainQuery) {
    const query = new QueryBuilder<Organization>()
      .equal('subdomain', subdomain)
      .getOne()

    return await this.organizationsReadableRepo.getOne(query)
  }
}