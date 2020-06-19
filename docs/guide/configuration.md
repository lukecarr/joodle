# Configuration

We touched upon the configuration options that Joodle provides on the [Initialization](/guide/initialization.html) page, however more complex options are also available for you to configure.

When initializing a new instance of the Joodle client, you can provide two parameters. The first is the [client options](#client-options), and the second is the [HTTP options](#http-options).

## Client Options

```js
new Joodle(
  {
    baseURL: "https://moodle.example.com",
    token: "abcdef123456"
  },
  ...
);
```

The `baseURL` option points the client to your Moodle instance. If this option is not provided then the client falls back to the `JOODLE_BASE_URL` environment variable instead.

The `token` option is your Mooble Web Services API token. If this option is not provided then the client falls back to the `JOODLE_TOKEN` environment variable instead.

## HTTP Options

```js
new Joodle(
  ...,
  {
    timeout: 2000,
    retries: 5,
    rejectInvalidSSL: false,
    cache: undefined
  }
);
```

The `timeout` option defines the duration in milliseconds that the client should wait for a response from Moodle before aborting the request. By default, there is no response timeout duration.

The `retries` option indicates how many times the client should retry a request upon failure. By default, the client will make retry the request twice if the first request to Moodle fails.

The `rejectInvalidSSL` option indicates whether the client should reject invalid SSL certificates or not. By default, the client will reject invalid SSL certificates.

The `cache` option allows you to enable HTTP response caching. By default, the client will not cache any responses. See the [Caching](/guide/caching.html) section for more information.

::: danger
You should only set the `rejectInvalidSSL` option to `true` when connecting to local Moodle instances (`baseURL: "https://localhost"`). There are severe security implications when accepting invalid SSL certificates from remote Moodle sites.
:::
