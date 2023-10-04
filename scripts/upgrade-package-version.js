const packageJSON = require('../package.json')
const fs = require('fs')

const version = packageJSON.version.split('.')
version[2] = parseInt(version[2]) + 1
packageJSON.version = version.join('.')
fs.writeFileSync('./package.json', JSON.stringify(packageJSON, null, 2))
console.log(`Upgraded package version to ${packageJSON.version}`)

