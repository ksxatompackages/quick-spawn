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
}

const {prototype} = APIRootObject

const table = [
  ['APIRootObject', '../classes/api.js'],
  ['applyClassTemplate', '../templates/apply-class.js'],
  ['applyInstanceTemplate', '../templates/apply-instance.js'],
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