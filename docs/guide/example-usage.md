# Example Usage

Now that you have Joodle setup and initialized, you can start using the client to communicate with Moodle's Web Services API.

In the below example, we invoke the a Moodle Web Services function (`core_user_get_users_by_field`) and display the returned users in the console. We also catch any errors that Moodle might raise and log those to the console as well.

```js
import { Joodle } from "joodle";

const client = new Joodle({
  baseURL: "https://moodle.example.com",
  token: "abcdef123456",
});

client.core.user
  .getUsersByField("email", "test1@example.com", "test2@example.com")
  .then((users) => console.log(users))
  .catch((error) => console.error(error));
```

## Async/Await

You can also use Joodle with `async`/`await`! The below code is identical in functionality to the above code.

```js
import { Joodle } from "joodle";

const client = new Joodle({
  baseURL: "https://moodle.example.com",
  token: "abcdef123456",
});

(async () => {
  try {
    const users = await client.core.user.getUsersByField(
      "email",
      "test1@example.com",
      "test2@example.com"
    );
    console.log(users);
  } catch (error) {
    console.error(error);
  }
})();
```

Now that you have an understanding of how Joodle works, head over to the [API Reference](/reference) where you can find a list of all functions that Joodle's client provides.
