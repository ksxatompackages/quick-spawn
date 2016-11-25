'use strict'

const once = require('exec-once')

const build = (base, {disposalact}) => {
  let state = false
  const dispose = once(() => {
    disposalact(base)
    state = true
    return disposable
  })
  const disposable = {
    dispose,
    get disposed () {
      return state
    },
    __proto__: base
  }
  return disposable
}

module.exports = {build}
