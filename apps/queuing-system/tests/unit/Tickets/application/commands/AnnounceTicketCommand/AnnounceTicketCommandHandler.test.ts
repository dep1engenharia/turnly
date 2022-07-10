/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/common'

import { AnnounceTicketCommandHandler } from '../../../../../../src/Tickets/application/commands/AnnounceTicketCommand'
import { TicketStatus } from '../../../../../../src/Tickets/domain/enums/TicketStatus'
import { TestEventBus } from '../../../../../shared/__mocks__/TestEventBus'
import { TestQueryBus } from '../../../../../shared/__mocks__/TestQueryBus'
import { TicketsWritableRepo } from '../../../__mocks__/TicketsWritableRepo'
import { TicketMother } from '../../../domain/TicketMother'
import { AnnounceTicketCommandMother } from './AnnounceTicketCommandMother'

let repository: TicketsWritableRepo
let queryBus: TestQueryBus
let eventBus: TestEventBus
let handler: AnnounceTicketCommandHandler

describe('tickets > application > validates the expected behavior when a ticket is announce', () => {
  beforeEach(() => {
    eventBus = new TestEventBus()
    queryBus = new TestQueryBus()

    repository = new TicketsWritableRepo()
    handler = new AnnounceTicketCommandHandler(eventBus, queryBus, repository)
  })

  it('should announce a existing ticket', async () => {
    const command = AnnounceTicketCommandMother.random()

    let ticket = TicketMother.fromExistingTicketOnCommand(command)
    queryBus.attachAskResponse(ticket)

    ticket = await handler.execute(command)

    const { status } = ticket.toObject()
    expect(status).toEqual(TicketStatus.ANNOUNCED)

    repository.assertLastSavedEntityIs(ticket)
    eventBus.assertPublishCalled()
  })

  it('should throw a ResourceNotFoundException when the ticket does not exist', async () => {
    const command = AnnounceTicketCommandMother.random()

    queryBus.attachAskResponse(null)

    await expect(handler.execute(command)).rejects.toThrow(
      ResourceNotFoundException
    )

    repository.assertNothingSaved()
    eventBus.assertNothingPublished()
  })
})
