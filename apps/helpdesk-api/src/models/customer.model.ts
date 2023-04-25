/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class CustomerModel {
  @Field(() => ID)
  id: string

  @Field(() => String, { nullable: true })
  name: string

  @Field(() => String, { nullable: true })
  lastname: string

  @Field(() => String, { nullable: true })
  email: string

  @Field(() => String, { nullable: true })
  country: string
}
