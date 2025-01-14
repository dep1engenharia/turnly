/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'
import { EntityTypes } from 'answers/shared/domain/enums/entity-type.enum'

import { ListAnswersByFieldQuery } from '../../../../src/answers/list-answers-by-field'

export class ListAnswersByFieldQueryMother {
  static create(
    entityType: EntityTypes = EntityTypes.CUSTOMER,
    fieldId: Guid = ObjectMother.uuid('field'),
    extra: Extra[] = ObjectMother.repeater(ObjectMother.extra, 1),
    organizationId: Guid = ObjectMother.uuid('org')
  ): ListAnswersByFieldQuery {
    return ListAnswersByFieldQuery.build({
      organizationId,
      entityType,
      fieldId,
      extra,
    })
  }

  static random(): ListAnswersByFieldQuery {
    return this.create()
  }
}
