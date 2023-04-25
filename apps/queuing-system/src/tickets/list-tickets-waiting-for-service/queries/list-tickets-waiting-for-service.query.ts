/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/core'

export class ListTicketsWaitingForServiceQuery implements IQuery {
  public constructor(
    public readonly serviceIds: Guid[],
    public readonly organizationId: Guid
  ) {}
}
