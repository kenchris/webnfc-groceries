## WebNFC Shopping Card demo

> Web NFC Shopping Card demo

## Getting Started

1. Install the dependencies

### Install dependencies

#### Quick-start (for experienced users)

With Node.js installed, run the following one liner from the root of your checkout of the repository:

```sh
npm install -g gulp bower && npm install && bower install
```

#### Prerequisites (for everyone)

The app requires the following major dependencies:

- Node.js, used to run JavaScript tools from the command line.
- npm, the node package manager, installed with Node.js and used to install Node.js packages.
- gulp, a Node.js-based build tool.
- bower, a Node.js-based package manager used to install front-end packages (like Polymer).

**To install dependencies:**

1)  Check your Node.js version.

```sh
node --version
```

The version should be at or above 0.12.x.

2)  If you don't have Node.js installed, or you have a lower version, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

3)  Install `gulp` and `bower` globally.

```sh
npm install -g gulp bower
```

This lets you run `gulp` and `bower` from the command line.

4)  Install the apps's local `npm` and `bower` dependencies.

```sh
cd webnfc-shoppingcart-demo && npm install && bower install
```

This installs the element sets (Paper, Iron, Platinum) and tools the app requires to build and serve apps.

### Development workflow

#### Serve / watch

```sh
gulp serve
```

Using appengine:

```sh
dev_appserver.py webnfc-shoppingcart-demo
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

#### Build

```sh
gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as image, script, stylesheet and HTML optimization and minification.

