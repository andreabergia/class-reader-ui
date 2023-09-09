# class-reader-ui

A simple webapp that uses my Rust library class-reader, compiled as a wasm module, to load a Java `.class` file and display what it contains in the browser.

Note: it does not yet have a pipeline build script or any automated deploy, because I am using a local version of my library at the moment!

Tech stack: [react](https://react.dev/), [typescript](https://www.typescriptlang.org/), [react-dropzone](https://react-dropzone.js.org/), [react-json-tree](https://www.npmjs.com/package/react-json-tree), some simple hand-written css, [vite](https://vitejs.dev/), [jest](https://jestjs.io/), [eslint](https://eslint.org/).

## Running and testing

```
# starts local webserver
npm run dev

# runs test
npm run test

# runs eslint
npm run lint

# builds app
npm run build
```
