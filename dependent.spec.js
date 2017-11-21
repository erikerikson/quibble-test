const quibble = require('quibble')

const first = 'first'
const second = 'second'

let prefix

const dependency = quibble('./dependency.js', { install: (arg) => { console.log(`${prefix} replacement ${arg}`) }})

const dependent = require('./dependent.js')

Promise.resolve()
  .then(() => { prefix = first})
  .then(() => { dependent.go(1) })
  .then(() => { prefix = second})
  .then(() => { dependent.go(2) })
