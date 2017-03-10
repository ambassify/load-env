# load-env

Helper library to manage environment variables.

## Installation

```shell
npm install --save @ambassify/load-env
```

## Usage

Will throw an error when the environment variable is not set and no default is specified.

```javascript
const load_env = require('@ambassify/load-env');
const NODE_ENV = load_env('NODE_ENV', 'production');
```

#### load_env()
```javascript
load_env(variableName, [defaultValue])
```

- **variableName**: The environment variable to load.
- **defaultValue**: The default value when an environment variable is not set.

## Contributing

If you have some issue or code you would like to add, feel free to open a Pull Request or Issue and we will look into it as soon as we can.

## License

We are releasing this under a MIT License.

## About us

If you would like to know more about us, be sure to have a look at [our website](https://www.ambassify.com), or our Twitter accounts [@Ambassify](https://twitter.com/Ambassify), [Sitebase](https://twitter.com/Sitebase), [JorgenEvens](https://twitter.com/JorgenEvens)
