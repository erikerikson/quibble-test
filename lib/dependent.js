const dep = require('./dependency')

module.exports = {
  go: (arg) => {
    dep.install(arg)
  }
}
