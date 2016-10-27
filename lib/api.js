'use strict'

const once = require('exec-once')
const {defineProperty} = Object

const table = [
  ['applyTemplate', './templates'],
  ['createDisposable', './templates/disposable.js'],
  ['EventEmitter', './templates/event-emitter.js']
]

for (const [name, path] of table) {
  defineProperty(exports, name, {
    get: once(() => require(path)),
    enumerable: true,
    configurable: false
  })
}
