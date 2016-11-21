'use strict'

const once = require('exec-once')

const build = (base, [{dispose}]) => {
  let state = false
  const disposable = {
    dispose: once(() => {
      dispose(base)
      state = true
      return disposable
    }),
    get disposed () {
      return state
    },
    __proto__: base
  }
  return disposable
}

module.exports = {build, __proto__: null}
