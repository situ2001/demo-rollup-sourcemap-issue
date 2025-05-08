import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    typescript({
      tsconfig: "tsconfig.json",
    }),
  ],
}
