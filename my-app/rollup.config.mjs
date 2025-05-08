import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps2';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    exports: "default",
    sourcemap: true,
    sourcemap: "inline",
    name: "MyLibrary",
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

    // sourcemaps(),

    babel({
      extensions: [".js",".jsx",".ts",".tsx"],
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
      presets: ["@babel/env"],

      // !! If we don't set this to false, an indirect source map will be generated
      // inputSourceMap: false,
    }),
  ],
}
