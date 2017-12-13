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

### withPrefix()

Create a load_env function that looks for prefixed environment variables and falls back to unprefixed version. If you do not provide a prefix, it will try
to generate one using the closest package.json's name field.

```javascript
const withPrefix = require('@ambassify/load-env/with-prefix');
const load_env = withPrefix();

// assuming package.json with: { "name": "@acme/foo-bar" }
// and: process.env.FOO_BAR_NODE_ENV = production
// and: process.env.NODE_ENV = staging
load_env('NODE_ENV');
// <-- "production"
```


## Contributing

If you have some issue or code you would like to add, feel free to open a Pull Request or Issue and we will look into it as soon as we can.

## License

We are releasing this under a MIT License.

## About us

If you would like to know more about us, be sure to have a look at [our website](https://www.ambassify.com), or our Twitter accounts [@Ambassify](https://twitter.com/Ambassify), [Sitebase](https://twitter.com/Sitebase), [JorgenEvens](https://twitter.com/JorgenEvens)
