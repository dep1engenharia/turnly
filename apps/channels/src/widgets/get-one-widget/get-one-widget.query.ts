/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { Query } from '@turnly/core'

export class GetOneWidgetQuery extends Query {
  public readonly id: Guid
}
