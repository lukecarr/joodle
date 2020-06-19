---
title: Module
---

# Module

## Classes

<dl>
<dt><a href="#Module">Module</a></dt>
<dd><p>Represents a collection of Moodle Web Services API functions.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#handleResponse">handleResponse(body)</a></dt>
<dd><p>Attempts to handle a JSON body returned by a call to Moodle&#39;s Web Services API.
If the body contains an <code>exception</code> property, then the response is assumed to
be erroneous, and a rejected Promise is returned.</p>
</dd>
</dl>

<a name="Module"></a>

## *Module*
Represents a collection of Moodle Web Services API functions.

**Kind**: global abstract class  
**Since**: 0.1.0  

* *[Module](#Module)*
    * *[new Module([client])](#new_Module_new)*
    * *[.get(wsfunction, [searchParams])](#Module+get)*

<a name="new_Module_new"></a>

### *new Module([client])*
Initializes the module.


| Param | Type | Description |
| --- | --- | --- |
| [client] | <code>Client</code> | The parent client of this module. |

<a name="Module+get"></a>

### *module.get(wsfunction, [searchParams])*
Performs a GET request to Moodle's Web Services API.

**Kind**: instance method of [<code>Module</code>](#Module)  
**Access**: protected  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| wsfunction | <code>string</code> | The name of the Moodle Web Services API function to invoke. |
| [searchParams] | <code>any</code> | Any additional GET parameters to include in the request. |

<a name="handleResponse"></a>

## handleResponse(body)
Attempts to handle a JSON body returned by a call to Moodle's Web Services API.
If the body contains an `exception` property, then the response is assumed to
be erroneous, and a rejected Promise is returned.

**Kind**: global function  
**Since**: 0.1.0  

| Param | Description |
| --- | --- |
| body | A JSON body returned by a Moodle API call. |

