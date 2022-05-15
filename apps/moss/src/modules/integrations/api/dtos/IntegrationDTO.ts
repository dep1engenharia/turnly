import { Uuid } from '@turnly/shared'
import { Integration } from 'modules/integrations/domain/entities/Integration'
import { IntegrationStatus } from 'modules/integrations/domain/enums/IntegrationStatus'
import { Mapper, MapProp } from 'ts-simple-automapper'

export class IntegrationDTO {
  @MapProp()
  id: Uuid

  @MapProp()
  name: string

  @MapProp()
  status: IntegrationStatus

  @MapProp()
  origins: string[]

  public static create(resource: Integration): IntegrationDTO {
    return new Mapper().map(resource, new IntegrationDTO())
  }

  public static createList(collection: Integration[]): IntegrationDTO[] {
    return new Mapper().mapList(collection, IntegrationDTO)
  }
}