# Getting Started

Getting started with Joodle is super simple and only a small amount of configuration is needed for it to work out of the box.

::: tip
This page is intended to educate people on how Moodle's Web Services API works. If you already have an understanding of how the Web Services API works and have an API token generated for your site's API (and it works!) then you can skip this page and go straight to [Installation](/guide/installation.html).
:::

## Requirements

There are a few requirements that you need to meet before you can get started using Joodle:

- **A Moodle site.** This one may seem obvious, but you'll definitely need an instance of Moodle running that is accessible from your workstation (or whatever environment your Node.js script is running in).
- **The Web Services API enabled.** You can enable the Web Services API within Moodle by going to `Administration > Site administration > Advanced features` and checking the `Enable web services` box.
- **The Web Services REST Protocol enabled.** You will need to enable the REST protocol for Moodle's Web Services API to allow Joodle to communicate with your site. This can be done by going to `Administration > Site administration > Plugins > Web services > Manage protocols` and setting the `REST protocol` field to enabled.
- **A custom Web Services API service.** Moodle secures the Web Services API by restricting access to services that are only allowed to execute functions that they have explicit access to. See the [Creating a Moodle Service](creating-a-moodle-service) section below for instructions on how to create a custom service for Joodle to use.
- **A Web Services API token.** You need an API token to authenticate your requests to Moodle's Web Services API. This token should be kept secret; anyone with access to the token can access your Moodle site's Web Services API! See the [Generating an API token](#generating-an-api-token) section below for instructions on how to create a token for Joodle.

## Creating a Moodle Service

A Moodle Web Services API service allows you restrict what functions can be executed by a third-party application (such as a Node.js app using Joodle). Services enable you to only give third-party applications access to the exact list of functions that they need to operate; an application that needs to create new users should not be able to call functions on the Web Services API that manipulate Moodle course content, for example.

Creating a service is dead simple and only takes a few minutes.

1. Start by navigating to `Administration > Site administration > Plugins > Web services > External services` and then click the `Add` link under the `Custom services` section.
2. Choose a name for you service; this can be anything you want.
3. Ensure that the `Enabled` box is checked; if this is not checked then your generated tokens will not authenticate with Moodle.
4. Click the `Add service` button to create the service.

Upon creation of the service, you should be redirected to the service's page. Here you can choose the `Add functions` option to choose what functions you'd like to provide this service with access to.

## Generating an API Token

An API token is a secret string value that allows a third-party application or library (such as Joodle) to authenticate and access your Moodle site's Web Services API. Each token is linked to a service (see above), meaning that any application that authenticates with a specific API token can only call the functions that the token's service has access to.

Generating an API token can be done in a few simple steps.

1. Head over to `Administration > Site administration > Plugins > Web services > Manage tokens` and click the `Add` link.
2. Choose a user for the token. This user will own the token and should be an administrator or developer Moodle account.
3. Choose the service that you created earlier from the `Service` dropdown.
4. You can optionally add an IP address restriction to only allow requests to be made to your site's API using this token from specific networks.
5. You can also configure the token to expire on a certain date.
6. Click the `Save changes` button to create your token.

Upon creation of the token, you should be redirected back to the tokens page where your newly generated token can be found.

::: danger
You should not share tokens with anyone who you don't wish to access your site's API. Anyone with a token will be able to connect to your Moodle site's Web Services API and invoke the functions that the token's service has access to.

You should also avoid storing the token string in plaintext within your application's source code. This also means that you should not commit tokens to your version control system! You should use other means for loading the token into your application, such as environment variables (which Joodle has support for, see [Configuration](/guide/configuration.html)).
:::
