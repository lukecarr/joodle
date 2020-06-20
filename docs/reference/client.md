---
title: Client
---

# Client

## Classes

<dl>
<dt><a href="#Client">Client</a></dt>
<dd><p>A client that can send HTTP requests to a Moodle site&#39;s Web Services API.</p>
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

<a name="Client"></a>

## *Client*
A client that can send HTTP requests to a Moodle site's Web Services API.

**Kind**: global abstract class  
**Since**: 0.1.0  

* *[Client](#Client)*
    * *[new Client([options], [httpOptions])](#new_Client_new)*
    * *[.invoke(wsfunction, [searchParams])](#Client+invoke)*

<a name="new_Client_new"></a>

### *new Client([options], [httpOptions])*
Initializes the client as well as the client's `got` instance so HTTP
requests can be made.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>ClientOptions</code> | The client's configuration options. |
| [httpOptions] | <code>HttpOptions</code> | HTTP configuration options to pass                                      along to `got`. |

<a name="Client+invoke"></a>

### *client.invoke(wsfunction, [searchParams])*
Invokes a Moodle Web Services API function.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Since**: 1.0.0  

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
**Since**: 1.0.0  

| Param | Description |
| --- | --- |
| body | A JSON body returned by a Moodle API call. |

