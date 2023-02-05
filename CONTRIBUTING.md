<div align="center">
  <p align="center">
      <a href="https://turnly.app" target="_blank" rel="noopener">
          <img src="https://raw.githubusercontent.com/turnly/turnly/develop/docs/assets/github-header.png" />
      </a>
  </p>

  <p>
    <sub>
      Built with ❤︎ by
      <a href="/OWNERS.md">
        maintainers
      </a>
    </sub>
  </p>
</div>

# Contributing

First off, thanks for your interest in Turnly and for wanting to contribute!

### Machine dependencies

To properly set up the Docker environment, ensure you meet the following requirements:

- [Docker](https://www.docker.com)
- [Node.js v18.12 (LTS)](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/getting-started/install)

- ⚠️ If you are a **Windows** user, make sure to use a Unix/Linux
based terminal like **Git bash**.
- We highly recommend you review the [troubleshooting docs.](/docs/troubleshooting.md)

### Development

#### Step 1: Install application

```sh
# For convenience, clone this repo to a previously created directory called turnly or turnly-apps.

# Create turnly directory (optional)
mkdir turnly-apps

# Go to turnly directory
cd turnly-apps

# Clone repo
git clone git@github.com:turnly/turnly.git
```

#### Step 2: Setup application

```sh
# This command will do:
#
# 1. Install local dependencies.
# 2. Copy environment file.
# 3. And other common tasks.
yarn devo setup

# OR

# Use verbose to show all the output of commands.
yarn devo setup --verbose
```

#### Step 3: Start command

```sh
# Start all available services:
yarn devo start

# Start specific services:
yarn devo start -s queuing-system -s helpdesk-realtime-api

# OR

# Use verbose to show all the output of the containers and commands.
yarn devo start --verbose

# Build images before starting containers and re-run setup.
yarn devo start --verbose --build
``` 

### Helpful for development

#### Stop command

```sh
yarn devo stop

# OR

# Use verbose to show all the output of commands.
yarn devo stop --verbose
```

#### Reload command

```sh
# Stop all available services:
yarn devo reload

# Stop specific services:
yarn devo reload -s helpdesk-realtime-api
```

#### Linting command

```sh
# Run linters on each services:
yarn devo lint --all

# Run linters only if the apps has changed since last commit
yarn devo lint

# OR

# Use verbose to show all the output of commands.
yarn devo lint --all --verbose
```

#### Workspace commands

You can take advantage of yarn workspaces to interact with apps, for example,
you can run the commands for one of your services from DevO using:

```sh
yarn devo helpdesk-realtime-api command

# Same as:
cd ./apps/helpdesk-realtime-api && yarn run command

# -------------------------------------

yarn devo queueing-system build

# Same as:
cd ./apps/queueing-system && yarn run build
```

### Testing

Each application has its own set of tests, and they generally follow the same
rules of writing and structure. All the tests are executed on our CI and a PR
could only be merged once the tests pass.

Most tests will benefit from using this template as a starting point:

```typescript
describe('<scope name> > <task title>', async () => {
  test('should <put a detailed description of what it should do here>', () => {
    // test go here
  })

  // additional tests if needed
})
```

### Conventions (Required)

We highly recommend you review the [conventions docs.](/docs/conventions.md)

### DevO Tool

**As a concept:**

DevO is a concept adopted in Turnly ecosystem to automate and facilitate all tasks
in the development environment.

**As a Tool:**

Application written in bash and docker files that are described as docker-backed
infrastructure provisioning and systems management for the development environment.

##### DevO Commands

All available commands must be run using the `yarn devo` prefix.

##### Verbose and debug

When you run the commands and verbose is not enabled, a `devo.log` file is
generated with all the execution logs that can help you debug errors.

### Start specific application (Development Mode)

If you don't want to run all of Turnly's apps and services, you can go to the directory of the app
you want to contribute to and you'll find a README with details on how to run just that app.

##### APIs (Backend for Frontend) 🔗

| Name                                                                    | Description                                  | Live |
| ----------------------------------------------------------------------- | -------------------------------------------- |:----:|
| [Gateway (Application Proxy)](/apps/gateway)                            | API entry point and access management        | 🟢   |
| [Widgets API](/apps/widgets-api)                                        | GraphQL API for widgets clients              | 🟢   |
| [Helpdesk Real Time Messaging API (RTM)](/apps/helpdesk-realtime-api)   | A WebSocket-based API for platform events    | 🟢   |
| [Widgets Real Time Messaging API (RTM)](/apps/widgets-realtime-api)     | A WebSocket-based API for widgets events     | 🟢   |

##### Microservices 🔗

| Name                                               | Description                                                       | Live |
| -------------------------------------------------- | ----------------------------------------------------------------- |:----:|
| [Branch Management](/apps/branch-management)       | Locations, services offered, working hours, desk, etc.            | 🟢   |
| [Business Data Fields](/apps/business-data-fields) | Business Data Fields, Customers and Agents answers.               | 🟢   |
| [Queuing System](/apps/queuing-system)             | Tickets and Customers management.                                 | 🟢   |
| [Localization](/apps/localization)                 | Countries, timezones and languages support                        | 🔴   |

### Software Architecture

The Turnly are built using multiple architectural concepts,
we highly recommend you review the [architecture docs.](/docs/architecture)

![high-level-architecture](/docs/diagrams/high-level-architecture.png)

#### How to create a new application

> If you intend to add a new service, BFF, application, or others,
> use [this guide](/docs/how-to-create-new-application.md) to ensure a successful addition.

### Others resources 🔗

- [Postman Collections](/docs/postman/)
