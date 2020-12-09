---
title: core.webservice
---

# core.webservice

<a name="WebServiceModule"></a>

## WebServiceModule ⇐ <code>Module</code>
Functions relating to system actions.

**Kind**: global class  
**Extends**: <code>Module</code>  
**Since**: 0.2.0  
<a name="WebServiceModule+getSiteInfo"></a>

### webServiceModule.getSiteInfo() ⇒ <code>Promise.&lt;SiteInfoResponse&gt;</code>
Returns information about the Moodle site and the Web Services API. This function's response also contains
information relating to the web service user, such as capabilities and authorized API actions.

**Kind**: instance method of [<code>WebServiceModule</code>](#WebServiceModule)  
**Returns**: <code>Promise.&lt;SiteInfoResponse&gt;</code> - The response returned by Moodle.  
**Since**: 0.2.0  
