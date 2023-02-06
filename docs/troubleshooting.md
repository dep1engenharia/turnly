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

# Troubleshooting 🔥 

#### Permission denied (Windows) 

If you are a **Windows** user and are getting **Permission denied** errors
to access your hosts file, you need to do the following:

* If you started an earlier installation, run:

```sh
yarn docker down
```

* Close the terminal and reopen another one but as **Administrator**.
* Run again:

```sh
yarn start
```

#### Applications aren't restarting (Windows)

In some networked environments (such as a container running nodemon reading
across a mounted drive, you will need to use the legacyWatch: true which enables Chokidar's polling.

Via the CLI, use either `--legacy-watch` or `-L` for short:

> Package.json: 

```json
"scripts": {
  "dev": "nodemon -L --config node_modules/@turnly/eslint-config/nodemon.json src/main.ts"
}
```

#### Databases were not created when mongo started

Use this if the databases weren't created for some reason or if you
want to create new databases but your mongo container is already started.

1. Open terminal and run:

```sh
docker exec -it {MONGO_CONTAINER_NAME} mongo --username {MONGO_USERNAME} --password {MONGO_PASSWORD} --authenticationDatabase admin
```

2. Test permissions, run:

```sh
# Inside (mongo container)
show roles
```

3. Copy the content of [/.devo/provisioning/infrastructure/datasources/mongo/init-mongo.sh](/.devo/provisioning/infrastructure/datasources/mongo/init-mongo.sh)
4. Replace the `$MONGO_INITDB_ROOT_*` values with your credentials and execute it in the terminal.
5. Reload your application, and get to work!
