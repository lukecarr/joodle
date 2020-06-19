---
title: gradereport.user
---

# gradereport.user

<a name="UserModule"></a>

## UserModule ⇐ <code>Module</code>
Functions for user grades-related actions.

**Kind**: global class  
**Extends**: <code>Module</code>  
**Since**: 0.2.2  
<a name="UserModule+getGradeItems"></a>

### userModule.getGradeItems(course, [user], [group]) ⇒ <code>Promise.&lt;GetGradeItemsResponse&gt;</code>
Returns the complete list of grade items for users in a course.

Leaving the `user` and `group` parameters undefined will load the grade
items for all users in the course.

**Kind**: instance method of [<code>UserModule</code>](#UserModule)  
**Returns**: <code>Promise.&lt;GetGradeItemsResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.2  

| Param | Type | Description |
| --- | --- | --- |
| course | <code>number</code> | The ID of the course to obtain grade items for. |
| [user] | <code>number</code> | The ID of the user to obtain grade items for. |
| [group] | <code>number</code> | The ID of the group to obtain grade items for. |

