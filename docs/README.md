---
home: true
heroText: Joodle
tagline: Moodle Web Service API client for Node.js
actionText: Get Started
actionLink: /guide/
features:
- title: Lightweight and flexible
  details: Very few dependencies and extensive configuration for most use cases.
- title: Asynchronous methods
  details: Designed as a Promise-based API for async/await goodness!
- title: Type definitions
  details: Shipped with type definitions so it's TypeScript compatible out of the box!
footer: MIT Licensed | Copyright © 2020-present Luke Carr
---

### Example Usage

``` js
import { Joodle } from "joodle";

const client = new Joodle({
  baseURL: "https://moodle.example.com",
  token: "abcdef123456"
});

(async () => {
  try {
    const users = await client.core.user.getUsersByField("email", "test1@example.com", "test2@example.com");
    // => Users found on Moodle with emails matching test1@example.com or test2@example.com
  } catch (error) {
    // => Moodle threw an error!
  }
})();
```
