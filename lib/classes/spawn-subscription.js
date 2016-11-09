'use strict'

const applyClass = require('../templates/apply-class.js')
const SingleSubscription = require('../classes/single-subscription.js')

function SpawnSubscription (descriptor) {
  let currentProcess = null
  const getCurrentProcess = () => currentProcess
  const registerAtomCommand = descriptor => new SingleSubscription(descriptor)
  return {
    getCurrentProcess,
    __proto__: this
  }
}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(SpawnSubscription, templates)
