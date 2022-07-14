/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Extra } from '@turnly/common'

import { FieldMother } from './FieldMother'

describe('fields > domain > validates the min behavior in the life-cycle of a field', () => {
  it('should return the required attributes after field-instantiation', () => {
    const field = FieldMother.random()
    const expectedToHave = ['label', 'type', 'entityType', 'organizationId']

    const attributes = field.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  describe('when the field is created', () => {
    it('should register a creation event', () => {
      const field = FieldMother.random()
      const events = field.pull()

      expect(events).toHaveLength(1)

      const event = events[0]

      expect(event.getName()).toBe('field.created')
      expect(event.payload).toBeDefined()
    })
  })

  it('should create a field with extra attributes', () => {
    const field = FieldMother.withExtra()

    const { extra } = field.toObject()

    expect(extra).toBeDefined()
    expect(extra?.length).toBeGreaterThan(0)

    const customAttribute = extra?.[0] as Extra

    expect(customAttribute).toHaveProperty('key')
    expect(customAttribute).toHaveProperty('value')
  })
})