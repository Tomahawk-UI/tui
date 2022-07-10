import babel from '@rollup/plugin-babel'
import commonJS from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

import path from 'path'

export default {
  input: ['./src/index.ts'],
  output: [
    { file: './build/bundle.js', format: 'cjs' },
    {
      file: './build/bundle.d.ts',
      format: 'es',
    },
  ],
  plugins: [
    nodeResolve(),
    commonJS(),
    babel(path.resolve(__dirname, 'babel.config.js')),
    typescript(),
    terser(),
    dts(),
  ],
  external: ['lodash.defaultsdeep', 'react', 'react-dom'],
}
