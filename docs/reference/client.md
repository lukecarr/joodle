---
title: Client
---

# Client

<a name="Client"></a>

## *Client*
A client that can send HTTP requests to a Moodle site's Web Services API.

**Kind**: global abstract class  
**Since**: 0.1.0  
<a name="new_Client_new"></a>

### *new Client([options], [httpOptions])*
Initializes the client as well as the client's `got` instance so HTTP
requests can be made.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>ClientOptions</code> | The client's configuration options. |
| [httpOptions] | <code>HttpOptions</code> | HTTP configuration options to pass                                      along to `got`. |

