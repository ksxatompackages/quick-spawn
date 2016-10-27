'use strict'

const createObjectDelegate = instance => ({
  get instance () {
    return instance
  },
  __proto__: instance
})

module.exports = createObjectDelegate
