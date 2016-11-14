'use strict'

const applyClass = require('../utils/apply-class.js')
const AtomCommandSubscription = require('../classes/atom-command-subscription.js')

function SpawnSubscription (descriptor) {
  let currentProcess = null
  const getCurrentProcess = () => currentProcess
  const registerAtomCommand = descriptor => new AtomCommandSubscription(descriptor)
  return {
    getCurrentProcess,
    __proto__: this
  }
}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(SpawnSubscription, templates)
