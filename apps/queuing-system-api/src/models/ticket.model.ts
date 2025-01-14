/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Field, ID, InputType, ObjectType } from 'type-graphql'

import { CustomerModel } from './customer.model'
import { LocationModel } from './location.model'
import { ServiceModel } from './service.model'

@InputType()
export class Answers {
  @Field()
  fieldId: string

  @Field()
  value: string
}

@InputType()
export class Extra {
  @Field()
  key: string

  @Field()
  value: string
}

@InputType()
export class TicketInput {
  @Field(() => ID)
  serviceId: string

  @Field(() => ID)
  locationId: string

  @Field(() => [Answers], { nullable: true })
  answers: Answers[]

  @Field(() => [Extra], { nullable: true })
  extra: Extra[]
}

@ObjectType()
export class TicketModel {
  @Field(() => ID)
  id: string

  @Field()
  status: string

  @Field()
  displayCode: string

  @Field(() => ID)
  serviceId: string

  @Field(() => ServiceModel)
  service: ServiceModel

  @Field(() => ID)
  locationId: string

  @Field(() => LocationModel)
  location: LocationModel

  @Field(() => ID)
  customerId: string

  @Field(() => CustomerModel)
  customer: CustomerModel

  @Field(() => [String])
  beforeYours: string[]

  @Field(() => String, { nullable: true })
  calledToDesk: string | null
}
