'use strict'

const {join} = require('path')
const {strictEqual, deepStrictEqual} = require('assert')

function main (EventEmitter, {object}) {
  const applyClass = require(join(object, '../apply-class.js'))
  return [assignment]
    .map(fn => fn(EventEmitter, applyClass))
    .map(validate)
}

function assignment (EventEmitter, applyClass) {
  const builder = (self, ...args) => {
    self.args = args
  }
  class MainEventEmitter extends applyClass(builder, [EventEmitter]) {
    constructor (first, ...rest) {
      super(...rest)
      this.first = first
    }
  }
  return MainEventEmitter
}

function validate (EventEmitter) {
  const emitter = new EventEmitter('first', ...'abcdefghijkl')
  strictEqual(emitter.first, 'first')
  deepStrictEqual(emitter.args, [...'abcdefghijkl'])
  let param
  emitter.on('pseudo-event', (...args) => param = args)
  emitter.emit('pseudo-event', ...'pseudo-param')
  deepStrictEqual(param, [...'pseudo-param'])
  return emitter
}

module.exports = main
