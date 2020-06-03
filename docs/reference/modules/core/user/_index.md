---
title: core.user
---

# core.user

<a name="UserModule"></a>

## UserModule
Functions for user-related actions.

**Kind**: global class  

* [UserModule](#UserModule)
    * [.agreeSitePolicy()](#UserModule+agreeSitePolicy)
    * [.createUsers(...users)](#UserModule+createUsers)
    * [.deleteUsers(...users)](#UserModule+deleteUsers)
    * [.getCourseUserProfiles(...users)](#UserModule+getCourseUserProfiles)
    * [.getPrivateFilesInfo(user)](#UserModule+getPrivateFilesInfo)
    * [.getUserPreferences(name, user)](#UserModule+getUserPreferences)
    * [.setUserPreferences(...preferences)](#UserModule+setUserPreferences)
    * [.getUsers()](#UserModule+getUsers)
    * [.getUsersByField(field, ...values)](#UserModule+getUsersByField)
    * [.updateUserPicture(draftItemId, user)](#UserModule+updateUserPicture)
    * [.deleteUserPicture(user)](#UserModule+deleteUserPicture)

<a name="UserModule+agreeSitePolicy"></a>

### userModule.agreeSitePolicy()
Agrees to the Moodle site policy for the current
web service user.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
<a name="UserModule+createUsers"></a>

### userModule.createUsers(...users)
Creates users and adds them to the Moodle site.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  

| Param | Description |
| --- | --- |
| ...users | The users to create. |

<a name="UserModule+deleteUsers"></a>

### userModule.deleteUsers(...users)
Deletes users from the Moodle site.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  

| Param | Description |
| --- | --- |
| ...users | The IDs of the users to delete. |

<a name="UserModule+getCourseUserProfiles"></a>

### userModule.getCourseUserProfiles(...users)
Gets the course profiles for users.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  

| Param | Description |
| --- | --- |
| ...users | The users (comprising of user ID and course ID) to lookup. |

<a name="UserModule+getPrivateFilesInfo"></a>

### userModule.getPrivateFilesInfo(user)
Returns general information about files in
a user's private files area.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  

| Param | Description |
| --- | --- |
| user | The ID of the user to lookup file info on. If no ID is provided, the ID of the web service user is used. |

<a name="UserModule+getUserPreferences"></a>

### userModule.getUserPreferences(name, user)
Returns user preferences for a Moodle user.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  

| Param | Description |
| --- | --- |
| name | The name of the preference to lookup. If no name is provided, all preferences are returned. |
| user | The ID of the user to lookup preferences for. If no ID is provided, the ID of the web service user is used. |

<a name="UserModule+setUserPreferences"></a>

### userModule.setUserPreferences(...preferences)
Sets user preferences for Moodle users.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  

| Param | Description |
| --- | --- |
| ...preferences | The preferences to set. |

<a name="UserModule+getUsers"></a>

### userModule.getUsers()
Searches for users on the Moodle site that match
the provided crtieria.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
<a name="UserModule+getUsersByField"></a>

### userModule.getUsersByField(field, ...values)
Searches for users on the Moodle site that match
a specific field value.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  

| Param | Description |
| --- | --- |
| field | The name of the field to search. |
| ...values | The value to search users' fields for. |

<a name="UserModule+updateUserPicture"></a>

### userModule.updateUserPicture(draftItemId, user)
Updates a user's profile picture.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  

| Param | Description |
| --- | --- |
| draftItemId | The ID of the draft file to use as the picture. |
| user | The ID of the user to update the picture of. If no ID is provided, the ID of the web service user is used. |

<a name="UserModule+deleteUserPicture"></a>

### userModule.deleteUserPicture(user)
Deletes a user's profile picture.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  

| Param | Description |
| --- | --- |
| user | The ID of the user to delete the picture of. If no ID is provided, the ID of the web service user is used. |

