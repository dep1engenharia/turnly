/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { OrganizationCommand } from '@turnly/core'
import { CreatedByTypes } from 'access-tokens/shared/domain/enums/created-by-types.enum'
import { Scopes } from 'access-tokens/shared/domain/enums/scopes.enum'

export class CreateAccessTokenCommand extends OrganizationCommand {
  public readonly name: string
  public readonly scopes: Scopes[]
  public readonly createdByType: CreatedByTypes
  public readonly createdById: Guid
}
