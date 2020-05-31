# Installation

Installing Joodle for use within Node.js is really easy and takes no time at all!

## Create a Node.js Project

Start by creating a new Node.js project (if you haven't already).

```bash
npm init -y
```

You should find a newly generated `package.json` file inside your directory.

## Install as a Dependency

Now you can install Joodle from NPM as a dependency inside your `package.json` file.

```bash
npm i joodle
```

You should find that your `package.json` file has updated to include `joodle` under the `dependencies` section. A `package-lock.json` file and a `node_modules` directory should have also been generated. The `node_modules` directory is where Joodle's source code is downloaded to.

::: tip
You should commit both the `package.json` and `package-lock.json` files to version control, but **not** the `node_modules` directory. You can do this by creating a `.gitignore` file in your project's directory and adding `node_modules/` as the first line.
:::

Your project's directory should now look something like this:

```
my-joodle-app
|- node_modules
|- .gitignore
|- package.json
|- package-lock.json
```
