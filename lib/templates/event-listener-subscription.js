'use strict'

const Disposable = require('./disposable.js')
const ObjectDelegate = require('./object-delegate.js')

module.exports = dispose => ({
  templates: [Disposable(dispose), ObjectDelegate]
})
