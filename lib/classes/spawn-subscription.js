'use strict'

const applyClass = require('../utils/apply-class.js')
const AtomCommandSubscription = require('../classes/atom-command-subscription.js')

function SpawnSubscription (descriptor) {
  let currentProcess = null
  const setCurrentProcess = value => { currentProcess = value }
  const getCurrentProcess = () => currentProcess
  const drvdesc = descriptor
  const acsrsrc = {setCurrentProcess, getCurrentProcess}
  const registerAtomCommand = descriptor => new AtomCommandSubscription(descriptor, drvdesc, acsrsrc)
  return {
    getCurrentProcess,
    registerAtomCommand,
    __proto__: this
  }
}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(SpawnSubscription, templates)
