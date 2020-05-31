# Initialization

Now that Moodle is configured and Joodle is installed, you can start importing it into your Node.js project and using it.

## Import Joodle

The Joodle class is the client that's used to interact with Moodle's Web Services API.

```js
import { Joodle } from "joodle";

// or

const { Joodle } = require("joodle");
```

## Initializing the Client

You can now create an instance of the Joodle client.

```js
const client = new Joodle({
  baseURL: "https://moodle.example.com",
  token: "abcdef123456",
});
```

The `baseURL` option should point to your Moodle site and the `token` option is your Moodle Web Services API token that we created earlier.

::: danger
We iterated this before, and we'll iterate it again. Do not store your plaintext token in your source code like the example above does! Use environment variables or load the token from a file excluded from version control.
:::

You can also provide a second parameter when initializing an instance of the Joodle client which allows for customization of the underlying HTTP library. This is explained on the [Configuration](/guide/configuration.html) page.
