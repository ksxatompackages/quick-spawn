'use strict'

const once = require('exec-once')
const API = require('./classes/api.js')
const {defineProperty} = Object

const table = [
  ['applyClassTemplate', './templates/apply-class.js'],
  ['applyInstanceTemplate', './templates/apply-instance.js'],
  ['Disposable', './templates/disposable.js'],
  ['ObjectDelegate', './templates/object-delegate.js'],
  ['EventListenerSubscription', './templates/event-listener-subscription.js'],
  ['EventEmitter', './templates/event-emitter.js']
]

const out = new API()

for (const [name, path] of table) {
  defineProperty(out, name, {
    get: once(() => require(path)),
    enumerable: true,
    configurable: false
  })
}

module.exports = out
