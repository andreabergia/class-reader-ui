# class-reader-ui

A simple webapp that uses my Rust library class-reader, compiled as a wasm module, to load a Java `.class` file and display what it contains in the browser.

Demo url: [https://andreabergia.github.io/class-reader-ui/](https://andreabergia.github.io/class-reader-ui/)

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
