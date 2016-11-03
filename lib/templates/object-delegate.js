'use strict'

const build = instance => ({
  get instance () {
    return instance
  },
  __proto__: instance
})

module.exports = {build}
