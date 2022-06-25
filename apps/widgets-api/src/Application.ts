import 'reflect-metadata'

import { Http, Startup } from '@turnly/shared'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import {
  CustomersDataSource,
  DataSource,
  FieldsDataSource,
  IntegrationsDataSource,
  LocationsDataSource,
  ServicesDataSource,
  TicketsDataSource,
} from 'datasources'
import { AuthGuard as authChecker } from 'middlewares/AuthGuard'
import { buildSchema } from 'type-graphql'

import { resolvers } from './resolvers'

export class Application extends Startup {
  private readonly server = new Http()
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    this.setupMonitoring()

    await this.setupPresentations()
  }

  private async setupPresentations(): Promise<void> {
    this.server.setup()

    const schema = await buildSchema({ resolvers, authChecker })

    const apollo = new ApolloServer({
      schema,
      csrfPrevention: true,
      cache: DataSource.getCache(),
      plugins: [
        ApolloServerPluginDrainHttpServer({
          httpServer: this.server.httpServer,
        }),
      ],
      context: ({ req, res }) => ({ req, res }),
      dataSources: () => ({
        fields: new FieldsDataSource(),
        customers: new CustomersDataSource(),
        locations: new LocationsDataSource(),
        integrations: new IntegrationsDataSource(),
        services: new ServicesDataSource(),
        tickets: new TicketsDataSource(),
      }),
    })

    await apollo.start()

    apollo.applyMiddleware({ app: this.server.app })

    await this.server.listen()
  }
}
