# Raw Invocation

Joodle is not maintained by a full-time team, and so we don't currently have the resources to implement every Moodle Web Services API function.

Starting from v1.0.0, Joodle provides an `Joodle.invoke()` method that lets you call any web services function (even if it hasn't been implemented within Joodle!).

```js
import { Joodle } from "joodle";

const client = new Joodle({
  baseURL: "https://moodle.example.com",
  token: "abcdef123456",
});

client.invoke("core_user_get_users_by_field")
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

## Drawbacks

The obvious drawback to using this method of calling functions is that the response returned by Joodle has type `any`. You'll need to refer to the Moodle Web Services documentation to understand what data is returned by `invoke()`.
