/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { OrganizationMother } from './organization.entity.mother'

describe('organizations > domain > validates the min behavior in the life-cycle of a organization', () => {
  it('should return the required attributes after organization-instantiation', () => {
    const organization = OrganizationMother.random()
    const expectedToHave = ['id', 'name', 'status', 'subdomain']

    const attributes = organization.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  it('should register a creation event when the organization is created', () => {
    const organization = OrganizationMother.random()
    const events = organization.pull()

    expect(events).toHaveLength(1)

    const event = events[0]

    expect(event.getName()).toBe('organization.created')
    expect(event.payload).toBeDefined()
  })
})
