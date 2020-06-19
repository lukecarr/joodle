# Caching

Out of the box, Joodle provides support for [RFC 7234](https://httpwg.org/specs/rfc7234.html) compliant HTTP caching. Fresh cache entries are served directly from the cache, and stale entries are revalidated with `If-None-Match`/`If-Modified-Since` headers.

## Supported Cache Stores

Joodle uses Keyv internally to support a wide range of storage adapters, including anything that implements the native JavaScript [Map API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

This means that you can use an in-memory store:

```js
...
const inMemoryStore = new Map();

const joodle = new Joodle(
  ...,
  {
    ...,
    cache: inMemoryStore
  }
);
```

Or you can use a more persistent store such as Redis (using [@keyv/redis](https://www.npmjs.com/package/@keyv/redis)):

```bash
$ npm install @keyv/redis
```

```js
...
const KeyvRedis = require("@keyv/redis");

const redis = new KeyvRedis("redis://user:pass@localhost:6379");

const joodle = new Joodle({
  ...,
  {
    ...,
    cache: redis
  }
})
```
