/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import { Field } from 'fields/shared/domain/entities/field.entity'

export class FieldsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Field>> | undefined
  ): Producers.BusinessDataFields.Field {
    const field = new Producers.BusinessDataFields.Field()

    if (entity) {
      field.setId(entity.id)
      field.setLabel(entity.label)

      if (entity.description) field.setDescription(entity.description)
      if (entity.placeholder) field.setPlaceholder(entity.placeholder)

      field.setType(entity.type)
      field.setEntityType(entity.entityType)
      field.setIsRequired(entity.isRequired)

      if (entity.extra) {
        const extras = entity.extra.map(extra =>
          new Producers.BusinessDataFields.Extra()
            .setKey(extra.key)
            .setValue(extra.value)
        )

        field.setExtrasList(extras)
      }
    }

    return field
  }
}
