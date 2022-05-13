# TypeScript & React Native TodoMVC Example

> TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open Source.

> _[TypeScript - typescriptlang.org](http://typescriptlang.org)_

> React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.

> [React Native - reactnative.dev](https://reactnative.dev/)

## Learning TypeScript

The [TypeScript website](http://typescriptlang.org) is a great resource for getting started.

Here are some links you may find helpful:

* [Tutorial](http://www.typescriptlang.org/Tutorial)
* [Code Playground](http://www.typescriptlang.org/Playground)
* [Documentation](https://github.com/Microsoft/TypeScript/wiki)
* [Applications built with TypeScript](http://www.typescriptlang.org/Samples)
* [Blog](http://blogs.msdn.com/b/typescript)
* [Source Code](https://github.com/Microsoft/TypeScript)

Articles and guides from the community:

* [Thoughts on TypeScript](http://www.nczonline.net/blog/2012/10/04/thoughts-on-typescript)
* [ScreenCast - Why I Like TypeScript](https://www.youtube.com/watch?v=Mh5VQVfWTbs)

Get help from other TypeScript users:

* [TypeScript on StackOverflow](http://stackoverflow.com/questions/tagged/typescript)
* [Forums](https://github.com/Microsoft/TypeScript/issues)
* [TypeScript on Twitter](http://twitter.com/typescriptlang)

_If you have other helpful links to share, or find any of the links above no longer work, please [let us know](https://github.com/tastejs/todomvc/issues)._

## Learning React Native

The [React Native getting started documentation](https://reactnative.dev/docs/getting-started) is a great way to get started.

Here are some links you may find helpful:

* [Documentation](http://facebook.github.io/react/docs/getting-started.html)
* [API Reference](http://facebook.github.io/react/docs/reference.html)
* [Blog](http://facebook.github.io/react/blog/)
* [React Native on GitHub](https://reactnative.dev)
* [Support](http://facebook.github.io/react/support.html)

Articles and guides from the community:

* [How is Facebook's React JavaScript library](http://www.quora.com/React-JS-Library/How-is-Facebooks-React-JavaScript-library)
* [React: Under the hood](http://www.quora.com/Pete-Hunt/Posts/React-Under-the-Hood)

Get help from other React Natiuve users:

* [React on StackOverflow](http://stackoverflow.com/questions/tagged/react-native)
* [Blog](https://reactnative.dev/blog/)

_If you have other helpful links to share, or find any of the links above no longer work, please [let us know](https://github.com/tastejs/todomvc/issues)._

## Running

A standalone TypeScript compiler is available on NPM.

npm install typescript
To compile the TypeScript in this project:

# from examples/typescript-react
$ ./node_modules/typescript/bin/tsc -p ./js/
To be able to run the output JS files in the browser:

# from examples/typescript-react
$ ./node_modules/browserify/bin/cmd ./js/app.js -o ./js/bundle.js"
To run the app, spin up an HTTP server (e.g. `python -m SimpleHTTPServer`) and visit http://localhost/.../myexample/.
Alternatively you can run:

# from examples/typescript-react
$ npm run start
