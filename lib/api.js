'use strict'

const once = require('exec-once')
const {defineProperty} = Object

const table = [
  ['applyClassTemplate', './templates/apply-class.js'],
  ['applyInstanceTemplate', './templates/apply-instance.js'],
  ['createDisposable', './templates/disposable.js'],
  ['createObjectDelegate', './templates/object-delegate.js'],
  ['createEventListenerSubscription', './templates/event-listener-subscription.js'],
  ['EventEmitter', './templates/event-emitter.js']
]

for (const [name, path] of table) {
  defineProperty(exports, name, {
    get: once(() => require(path)),
    enumerable: true,
    configurable: false
  })
}
