---
title: auth.email
---

# auth.email

<a name="AuthEmailModule"></a>

## AuthEmailModule ⇐ <code>Module</code>
Functions relating to Moodle's email-based self-registration.

This module's function calls may throw errors if self registration is disabled.

**Kind**: global class  
**Extends**: <code>Module</code>  
**Since**: 0.1.0  

* [AuthEmailModule](#AuthEmailModule) ⇐ <code>Module</code>
    * [.getSignUpSettings()](#AuthEmailModule+getSignUpSettings) ⇒ <code>Promise.&lt;SignUpSettingsResponse&gt;</code>
    * [.signUpUser(user)](#AuthEmailModule+signUpUser) ⇒ <code>Promise.&lt;SignUpUserResponse&gt;</code>

<a name="AuthEmailModule+getSignUpSettings"></a>

### authEmailModule.getSignUpSettings() ⇒ <code>Promise.&lt;SignUpSettingsResponse&gt;</code>
Get the sign-up required settings and profile fields.

**Kind**: instance method of [<code>AuthEmailModule</code>](#AuthEmailModule)  
**Returns**: <code>Promise.&lt;SignUpSettingsResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.1.0  
<a name="AuthEmailModule+signUpUser"></a>

### authEmailModule.signUpUser(user) ⇒ <code>Promise.&lt;SignUpUserResponse&gt;</code>
Adds a new user to the site (pending user confirmation).

**Kind**: instance method of [<code>AuthEmailModule</code>](#AuthEmailModule)  
**Returns**: <code>Promise.&lt;SignUpUserResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>SignUpUser</code> | The user to sign up. |

