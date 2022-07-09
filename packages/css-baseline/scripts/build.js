/* eslint-disable */
const sass = require('node-sass')

const packageJson = require('../package.json')

console.log('🎨 Building styles with Sass...')

sass.render({
  file: packageJson.main,
  outFile: packageJson.build,
  outputStyle: 'compressed',
  sourceComments: false,
})

console.log('🎨 Done building styles with Sass.')
