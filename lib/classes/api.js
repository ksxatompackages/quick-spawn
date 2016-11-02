'use strict'

const applyClass = require('../templates/apply-class.js')
const EventEmitter = require('../templates/event-emitter.js')

let api = null
function APIRootObject () {
  if (!api) {
    api = this
  }
  return api
}

class API extends applyClass(APIRootObject, [EventEmitter]) {}

module.exports = class extends API {}
