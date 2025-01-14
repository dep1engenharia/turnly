/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetOneTicketQuery } from '../../../../src/tickets/get-one-ticket'

export class GetOneTicketQueryMother {
  static create(
    id: Guid = ObjectMother.uuid('ticket'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): GetOneTicketQuery {
    return GetOneTicketQuery.build({ id, organizationId })
  }

  static random(): GetOneTicketQuery {
    return this.create()
  }
}
