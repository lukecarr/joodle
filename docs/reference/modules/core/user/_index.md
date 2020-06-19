---
title: core.user
---

# core.user

<a name="UserModule"></a>

## UserModule ⇐ <code>Module</code>
Functions for user-related actions.

**Kind**: global class  
**Extends**: <code>Module</code>  
**Since**: 0.2.0  

* [UserModule](#UserModule) ⇐ <code>Module</code>
    * [.agreeSitePolicy()](#UserModule+agreeSitePolicy) ⇒ <code>Promise.&lt;SitePolicyAgreementResponse&gt;</code>
    * [.createUsers(...users)](#UserModule+createUsers) ⇒ <code>Promise.&lt;CreateUsersResponse&gt;</code>
    * [.deleteUsers(...users)](#UserModule+deleteUsers) ⇒ <code>Promise.&lt;FunctionResponse&gt;</code>
    * [.getCourseUserProfiles(...users)](#UserModule+getCourseUserProfiles) ⇒ <code>Promise.&lt;GetCourseUserProfilesResponse&gt;</code>
    * [.getPrivateFilesInfo([user])](#UserModule+getPrivateFilesInfo) ⇒ <code>Promise.&lt;GetPrivateFilesInfoResponse&gt;</code>
    * [.getUserPreferences([name], [user])](#UserModule+getUserPreferences) ⇒ <code>Promise.&lt;GetUserPreferencesResponse&gt;</code>
    * [.setUserPreferences(...preferences)](#UserModule+setUserPreferences) ⇒ <code>Promise.&lt;SetUserPreferencesResponse&gt;</code>
    * [.getUsers(...criteria)](#UserModule+getUsers) ⇒ <code>Promise.&lt;GetUsersResponse&gt;</code>
    * [.getUsersByField(field, ...values)](#UserModule+getUsersByField) ⇒ <code>Promise.&lt;GetUsersByFieldResponse&gt;</code>
    * [.updateUserPicture(draftItemId, [user])](#UserModule+updateUserPicture) ⇒ <code>Promise.&lt;UserPictureResponse&gt;</code>
    * [.deleteUserPicture([user])](#UserModule+deleteUserPicture) ⇒ <code>Promise.&lt;UserPictureResponse&gt;</code>

<a name="UserModule+agreeSitePolicy"></a>

### userModule.agreeSitePolicy() ⇒ <code>Promise.&lt;SitePolicyAgreementResponse&gt;</code>
Agrees to the Moodle site policy for the current web service user.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
**Returns**: <code>Promise.&lt;SitePolicyAgreementResponse&gt;</code> - The response returned
                                                by Moodle.  
**Since**: 0.2.0  
<a name="UserModule+createUsers"></a>

### userModule.createUsers(...users) ⇒ <code>Promise.&lt;CreateUsersResponse&gt;</code>
Creates users and adds them to the Moodle site.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
**Returns**: <code>Promise.&lt;CreateUsersResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.0  

| Param | Description |
| --- | --- |
| ...users | The users to create. |

<a name="UserModule+deleteUsers"></a>

### userModule.deleteUsers(...users) ⇒ <code>Promise.&lt;FunctionResponse&gt;</code>
Deletes users from the Moodle site.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
**Returns**: <code>Promise.&lt;FunctionResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| ...users | <code>Array.&lt;number&gt;</code> | The IDs of the users to delete. |

<a name="UserModule+getCourseUserProfiles"></a>

### userModule.getCourseUserProfiles(...users) ⇒ <code>Promise.&lt;GetCourseUserProfilesResponse&gt;</code>
Gets the course profiles for users.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
**Returns**: <code>Promise.&lt;GetCourseUserProfilesResponse&gt;</code> - The response returned by
                                                  Moodle.  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| ...users | <code>Array.&lt;CourseUser&gt;</code> | The users (comprising of user ID and course ID)                             to lookup. |

<a name="UserModule+getPrivateFilesInfo"></a>

### userModule.getPrivateFilesInfo([user]) ⇒ <code>Promise.&lt;GetPrivateFilesInfoResponse&gt;</code>
Returns general information about files in a user's private files area.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
**Returns**: <code>Promise.&lt;GetPrivateFilesInfoResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| [user] | <code>number</code> | The ID of the user to lookup file info on. If none is provided,                        the ID of the web service user is used. |

<a name="UserModule+getUserPreferences"></a>

### userModule.getUserPreferences([name], [user]) ⇒ <code>Promise.&lt;GetUserPreferencesResponse&gt;</code>
Returns user preferences for a Moodle user.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
**Returns**: <code>Promise.&lt;GetUserPreferencesResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | The name of the preference to lookup. If none is provided, all                        preferences are returned. |
| [user] | <code>number</code> | The ID of the user to lookup preferences for. If none is provided,                        the ID of the web service user is used. |

<a name="UserModule+setUserPreferences"></a>

### userModule.setUserPreferences(...preferences) ⇒ <code>Promise.&lt;SetUserPreferencesResponse&gt;</code>
Sets user preferences for Moodle users.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
**Returns**: <code>Promise.&lt;SetUserPreferencesResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| ...preferences | <code>Array.&lt;NewPreference&gt;</code> | The preferences to set. |

<a name="UserModule+getUsers"></a>

### userModule.getUsers(...criteria) ⇒ <code>Promise.&lt;GetUsersResponse&gt;</code>
Searches for users on the Moodle site that match the provided crtieria.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
**Returns**: <code>Promise.&lt;GetUsersResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| ...criteria | <code>Array.&lt;SearchCriteria&gt;</code> | The search criteria used to search for                                    users. |

<a name="UserModule+getUsersByField"></a>

### userModule.getUsersByField(field, ...values) ⇒ <code>Promise.&lt;GetUsersByFieldResponse&gt;</code>
Searches for users on the Moodle site that match a specific field value.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
**Returns**: <code>Promise.&lt;GetUsersByFieldResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>&quot;id&quot;</code> \| <code>&quot;idnumber&quot;</code> \| <code>&quot;username&quot;</code> \| <code>&quot;email&quot;</code> | The name of the                                                          field to search for. |
| ...values |  | The value to search                                                          users' fields for. |

<a name="UserModule+updateUserPicture"></a>

### userModule.updateUserPicture(draftItemId, [user]) ⇒ <code>Promise.&lt;UserPictureResponse&gt;</code>
Updates a user's profile picture.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
**Returns**: <code>Promise.&lt;UserPictureResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| draftItemId | <code>number</code> | The ID of the draft file to use as the picture. |
| [user] | <code>number</code> | The ID of the user to update the picture of. If                             none is provided, the ID of the web service user                             is used. |

<a name="UserModule+deleteUserPicture"></a>

### userModule.deleteUserPicture([user]) ⇒ <code>Promise.&lt;UserPictureResponse&gt;</code>
Deletes a user's profile picture.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
**Returns**: <code>Promise.&lt;UserPictureResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| [user] | <code>number</code> | The ID of the user to delete the picture of. If none                        is provided, the ID of the web service user is used. |

