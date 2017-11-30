
const dependent = require('../lib/dependent.js')

describe('dependent 2', () => {
    it('calls to go', () => {
Promise.resolve()
    .then(() => { dependent.go(1) })
    .then(() => { dependent.go(2) })
    })
})
