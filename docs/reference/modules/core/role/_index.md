---
title: core.role
---

# core.role

<a name="RoleModule"></a>

## RoleModule ⇐ <code>Module</code>
Functions for assigning and unassigning user roles.

**Kind**: global class  
**Extends**: <code>Module</code>  
**Since**: 0.2.1  

* [RoleModule](#RoleModule) ⇐ <code>Module</code>
    * [.assignRoles(...assignments)](#RoleModule+assignRoles) ⇒ <code>Promise.&lt;FunctionResponse&gt;</code>
    * [.unassignRoles(...unassignments)](#RoleModule+unassignRoles) ⇒ <code>Promise.&lt;FunctionResponse&gt;</code>

<a name="RoleModule+assignRoles"></a>

### roleModule.assignRoles(...assignments) ⇒ <code>Promise.&lt;FunctionResponse&gt;</code>
Assigns roles to users.

**Kind**: instance method of [<code>RoleModule</code>](#RoleModule)  
**Returns**: <code>Promise.&lt;FunctionResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.1  

| Param | Type | Description |
| --- | --- | --- |
| ...assignments | <code>Array.&lt;RoleAssignment&gt;</code> | The roles to assign to users. |

<a name="RoleModule+unassignRoles"></a>

### roleModule.unassignRoles(...unassignments) ⇒ <code>Promise.&lt;FunctionResponse&gt;</code>
Unassigns roles from users.

**Kind**: instance method of [<code>RoleModule</code>](#RoleModule)  
**Returns**: <code>Promise.&lt;FunctionResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.1  

| Param | Type | Description |
| --- | --- | --- |
| ...unassignments | <code>Array.&lt;RoleAssignment&gt;</code> | The roles to unassign from users. |

