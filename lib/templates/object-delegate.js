'use strict'

const createObjectDelegate = instance => ({
  get instance () {
    return instance
  },
  __proto__: null
})

module.exports = createObjectDelegate
