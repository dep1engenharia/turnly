/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class ExtraModel {
  @Field(() => String)
  key: string

  @Field(() => String)
  value: string
}

@ObjectType()
export class FieldModel {
  @Field(() => ID)
  id: string

  @Field(() => String)
  label: string

  @Field(() => String, { nullable: true })
  description: string

  @Field(() => String)
  type: string

  @Field(() => String)
  placeholder: string

  @Field(() => Boolean)
  isRequired: boolean

  @Field(() => Boolean)
  hasProcessors: boolean

  @Field(() => [ExtraModel])
  extra: ExtraModel[]
}
