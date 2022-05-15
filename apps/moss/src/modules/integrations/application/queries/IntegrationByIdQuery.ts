import { Builder, IQuery, Query, TEntityManager } from '@turnly/core'
import { Nullable } from '@turnly/shared'
import { Integration } from 'modules/integrations/domain/entities/Integration'
import { GetIntegrationPayload } from 'modules/integrations/domain/payloads/GetIntegrationPayload'
import { IIntegrationMapper } from 'modules/integrations/infrastructure/contracts/IIntegrationMapper'
import { IntegrationModel } from 'modules/integrations/infrastructure/persistence/models/Integration'

export class IntegrationByIdQuery
  extends Query
  implements IQuery<GetIntegrationPayload, Nullable<Integration>>
{
  public constructor(
    private readonly _integrationMapper: IIntegrationMapper,
    manager?: TEntityManager
  ) {
    super(manager)
  }

  public async ask({
    id,
  }: GetIntegrationPayload): Promise<Nullable<Integration>> {
    const integration = await Builder.create({
      alias: 'integration',
      repository: this.manager.getRepository(IntegrationModel),
    })
      .equals('id', id)
      .getOne()

    return integration ? this._integrationMapper.toEntity(integration) : null
  }
}