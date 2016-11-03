'use strict'

const once = require('exec-once')

const createBuild = main => base => {
  let state = false
  const dispose = once(() => {
    main()
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

module.exports = main => ({build: createBuild(main)})
