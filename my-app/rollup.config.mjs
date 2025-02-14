import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    exports: "default",
    sourcemap: "inline",
    name: "foo",
  },
  plugins: [
    commonjs(),

    nodeResolve({
      browser: true,
      preferBuiltins: true,
    }),

    typescript({
      tsconfig: "tsconfig.json",
    }),

    babel({
      extensions: [".js",".jsx",".ts",".tsx"],
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
      presets: ["@babel/env"],
    }),
  ],
}
