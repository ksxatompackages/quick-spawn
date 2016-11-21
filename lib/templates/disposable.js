'use strict'

const once = require('exec-once')

const createBuild = main => base => {
  let state = false
  const disposable = {
    dispose: once(() => {
      main(base)
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

module.exports = ({dispose}) => ({build: createBuild(dispose)})
