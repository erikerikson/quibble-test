const quibble = require('quibble')

const first = 'first'
const second = 'second'

let prefix

const dependency = quibble('../lib/dependency.js', { install: (arg) => { console.log(`${prefix} replacement ${arg}`) }})

const dependent = require('../lib/dependent.js')

describe('dependent 1', () => {
    afterEach(() => {
        quibble.reset()
    })
    it('replaces go', () => {
        return Promise.resolve()
            .then(() => { prefix = first})
            .then(() => { dependent.go(1) })
            .then(() => { prefix = second})
            .then(() => { dependent.go(2) })
    })
})
