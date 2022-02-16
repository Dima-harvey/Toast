import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'
import alias from '@rollup/plugin-alias'

const input = 'src/index.js'
const output = 'dist/index'

export default [
  {
    input: input,
    output: {
      file: `${output}.js`,
      format: 'cjs',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes'
      },
    },
    plugins: [
      resolve({
        browser: true
      }),
      commonjs({
        include: ['node_modules/**'],
        namedExports: {
          'react-dom': ['createPortal']
        }
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external( [
        'react',
        'react-dom',
        'prop-types'
      ]),
      alias({
        entries: [
          { find: '@components', replacement: '../' }, 
          { find: '@', replacement: '../../' }       
        ]
      }),    
      uglify(),
    ]
  },
  {
    input: input,
    output: {
      file: `${output}.modern.js`,
      format: 'es',
    },

    plugins: [
      resolve(),
      commonjs({
        include: ['node_modules/**'],
        namedExports: {
          'react-dom': ['createPortal']
        }
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      alias({
        entries: [
          { find: '@components', replacement: '../' }, 
          { find: '@', replacement: '../../' }         
        ]
      }),  
      external(),
      terser()
    ]
  },
  {
    input: input,
    output: {
      name: 'ReactUi',
      file: `${output}.umd.js`,
      globals: {
        react: 'React',
        'styled-components': 'styled',
        'prop-types': 'PropTypes',
        'prop-types/checkPropTypes': 'checkPropTypes'
      },
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs({
        include: ['node_modules/**'],
        namedExports: {
          'react-dom': ['createPortal']
        }
      }),
      alias({
        entries: [
          { find: '@components', replacement: '../' },
          { find: '@', replacement: '../../' }          
        ]
      }),  
      external(),
      babel({
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  }
]
