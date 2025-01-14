/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { IFieldsReadableRepo } from 'fields/shared/domain/contracts/fields-repo.interface'
import { Field } from 'fields/shared/domain/entities/field.entity'

import { SearchCustomerFieldsByServiceQuery } from './search-customer-fields-by-service.query'

@QueryHandler(SearchCustomerFieldsByServiceQuery)
export class SearchCustomerFieldsByServiceQueryHandler
  implements
    IQueryHandler<SearchCustomerFieldsByServiceQuery, Nullable<Field[]>>
{
  public constructor(
    private readonly fieldsReadableRepo: IFieldsReadableRepo
  ) {}

  public async execute({
    organizationId,
    serviceId,
  }: SearchCustomerFieldsByServiceQuery) {
    const query = new QueryBuilder<Field>()
      .equal('organizationId', organizationId)
      .equal('entityType', 'customer')
      .inExtra('serviceId', serviceId)
      .getMany()

    return await this.fieldsReadableRepo.find(query)
  }
}
