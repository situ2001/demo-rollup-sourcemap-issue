# demo

This is a demo of the rollup sourcemap issue introduced in rollup babel plugin with `inputSourceMap: true` option.

## Steps to reproduce

Build

```shell
pnpm -r build
```

Go to `./my-app/dist` to find dist `index.js`

Then, use one of the following websites to open the `index.js` file:

- https://evanw.github.io/source-map-visualization/
- https://sokra.github.io/source-map-visualization/

You will see that the source code mapping is incorrect. Since

- Expected: babel transformed code ==sourcemap==> input code(in this case, js dist from `foo` package)
- Actual: babel transformed code ==sourcemap==> source code of input code(in this case, ts code from `foo` package), not input code itself

