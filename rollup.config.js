import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      resolve(),
      terser(),
      commonjs({
        namedExports: {
          // https://github.com/rollup/rollup-plugin-commonjs#custom-named-exports
          'node_modules/react/index.js': ['useState', 'useRef', 'useEffect']
        }
      })
    ],
    external: ['styled-components']
  }
]
