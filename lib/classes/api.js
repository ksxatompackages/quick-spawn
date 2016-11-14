'use strict'

const once = require('exec-once')
const applyClass = require('../templates/apply-class.js')
const EventEmitter = require('../templates/event-emitter.js')
const {defineProperty} = Object

let api = null
function APIRootObject () {
  if (api) {
    return api
  }
  api = this
  ; [
    ['registerSpawnCommand', './spawn-subscription.js'],
    ['registerSingleSubscription', './single-subscription.js']
  ]
    .map(
      ([name, path]) =>
        [name, require(path)]
    )
    .map(
      ([name, Create]) =>
        [name, (...args) => new Create(...args)]
    )
    .forEach(
      ([name, value]) =>
        defineProperty(this, name, {value, enumerable: true})
    )
}

const {prototype} = APIRootObject

const table = [
  ['APIRootObject', '../classes/api.js'],
  ['applyClassTemplate', '../utils/apply-class.js'],
  ['applyInstanceTemplate', '../utils/apply-instance.js'],
  ['Disposable', '../templates/disposable.js'],
  ['ObjectDelegate', '../templates/object-delegate.js'],
  ['EventListenerSubscription', '../templates/event-listener-subscription.js'],
  ['EventEmitter', '../templates/event-emitter.js']
]

for (const [name, path] of table) {
  defineProperty(prototype, name, {
    get: once(() => require(path)),
    enumerable: true,
    configurable: false
  })
}

class API extends applyClass(APIRootObject, [EventEmitter]) {}

module.exports = class extends API {}
