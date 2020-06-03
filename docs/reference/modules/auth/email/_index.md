---
title: auth.email
---

# auth.email

<a name="AuthEmailModule"></a>

## AuthEmailModule
Functions relating to Moodle's email-based self-registration.

This module's function calls may throw errors if self registration is disabled.

**Kind**: global class  

* [AuthEmailModule](#AuthEmailModule)
    * [.getSignUpSettings()](#AuthEmailModule+getSignUpSettings)
    * [.signUpUser(user)](#AuthEmailModule+signUpUser)

<a name="AuthEmailModule+getSignUpSettings"></a>

### authEmailModule.getSignUpSettings()
Get the sign-up required settings and profile fields.

**Kind**: instance method of [<code>AuthEmailModule</code>](#AuthEmailModule)  
<a name="AuthEmailModule+signUpUser"></a>

### authEmailModule.signUpUser(user)
Adds a new user to the site (pending user confirmation).

**Kind**: instance method of [<code>AuthEmailModule</code>](#AuthEmailModule)  

| Param | Description |
| --- | --- |
| user | The user to sign up. |

