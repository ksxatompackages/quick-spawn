'use strict'

const applyClass = require('../utils/apply-class.js')
const AtomCommandSubscription = require('../classes/atom-command-subscription.js')

function SpawnSubscription (descriptor) {
  let currentProcess = null
  const setCurrentProcess = value => { currentProcess = value }
  const getCurrentProcess = () => currentProcess
  const getSpawnSubscription = () => out
  const drvdesc = descriptor
  const acsrsrc = {setCurrentProcess, getCurrentProcess, getSpawnSubscription}
  const registerAtomCommand = descriptor => {
    const atomCommandSubscription = new AtomCommandSubscription(descriptor, drvdesc, acsrsrc)
    allAtomCommandSubscriptions.add(atomCommandSubscription)
    return atomCommandSubscription
  }
  const destroy = () => {
    getCurrentProcess().kill()
    setCurrentProcess(null)
    for (const subscription of allAtomCommandSubscriptions) {
      subscription.emit('destroy', {
        spawnSubscription: out,
        subscription
      })
    }
  }
  const allAtomCommandSubscriptions = new Set()
  const out = {
    getCurrentProcess,
    registerAtomCommand,
    __proto__: this
  }
  return out
}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(SpawnSubscription, templates)
