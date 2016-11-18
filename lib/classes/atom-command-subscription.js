'use strict'

const applyClass = require('../utils/apply-class.js')
const {validateTypedFunction} = require('../utils/validate.js')

function AtomCommandSubscription (descriptor, derived, resource) {
  const {execCmd} = derived
  const {setCurrentProcess, getCurrentProcess} = resource
  const getExecCmd = validateTypedFunction(execCmd, 'string')
  const out = {
    __proto__: this
  }
  return out
}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(AtomCommandSubscription, templates)
