<h1 align="center">
  joodle
  <br>
</h1>

<h4 align="center">Moodle Web Service API client for Node.js</h4>

<p align="center">
  Add any badges/shields for the repository here.
</p>

<p align="center">
  <strong>
    <a href="#key-features">Key Features</a> •
    <a href="#how-to-use">How to Use</a> •
    <a href="#contributing">Contributing</a> •
    <a href="#credits">Credits</a>
  </strong>
</p>

## Key Features

- Query Moodle's **[Web Services API](https://docs.moodle.org/dev/Web_services)**.
- Comes with TypeScript typings!

## How To Use

### Installation

Simply add the library as a NPM dependency in your Node.js project.

```bash
$ npm i joodle
```

You can always use Yarn if that's your kinda jam!

```bash
$ yarn add joodle
```

### Usage

#### Initialization

Initialise an instance of `Joodle` which is your client used for accessing Moodle's Web Services API.

```js
const { Joodle } = require("joodle");

const joodle = new Joodle({
  baseURL: "http://localhost",
  token: "your token",
});
```

The `baseURL` option should point to your Moodle website, and the `token` option is your Moodle Web Services token.

**You should not store your token in your source code! Please use other means such as environment variables or loading from a file excluded from version control.**

#### Modules

Joodle is split up into modules to mimic the way that Moodle's Web Services API has functions grouped by **[their area](https://docs.moodle.org/dev/Web_service_API_functions)**.

All modules (and their web service functions) are accessible through your `Joodle` instance.

For example: taking the first function listed on the aforementioned Moodle docs page.

|    Area    |              Name              |
| :--------: | :----------------------------: |
| auth_email | auth_email_get_signup_settings |

The `auth_email` module would be accessible in joodle (`joodle.auth.email`) and contain a function (`getSignUpSettings()`) corresponding to the above function.

Putting this all together, the above Moodle Web Services function corresponds to `joodle.auth.email.getSignUpSettings()` in joodle.

#### Promise API

All API calls in joodle return `Promises`, and resolve if a successful response is returned by Moodle, or reject if an error is encountered.

You can also use the `async`/`await` syntax:

```js
const { Joodle } = require("joodle");

const joodle = new Joodle(...);

(async () => {
  try {
    const response = await joodle.auth.email.getSignUpSettings();
    //=> Successful. Log response from Moodle...
    console.log(response);
  } catch (error) {
    //=> Moodle threw an error!
    console.error(error);
  }
})();
```

## Contributing

### General Guidelines

By contributing to this project, you agree to all of the general guidelines outlined in the **[CONTRIBUTING.md](CONTRIBUTING.md)** file.

### Code of Conduct

We have a code of conduct outlined in the **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)** file which you are expected to adhere to at all times.

## Credits

This project uses the following open source packages:

- **[Node.js](https://nodejs.org)**
- **[TypeScript](https://www.typescriptlang.org)**
- **[got](https://github.com/sindresorhus/got)**

For a comprehensive list, see the **[package.json](package.json)** file's dependencies section.
