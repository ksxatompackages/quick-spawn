'use strict'

const applyClass = require('../utils/apply-class.js')

const validateExecCmd = command => {
  switch (typeof command) {
    case 'function':
      return command
    case 'string':
      return () => command
    default:
      throw new TypeError('Invalid type of command')
  }
}

function AtomCommandSubscription (derived, resource) {
  const {execCmd} = derived
  const {setCurrentProcess, getCurrentProcess} = resource
  const getExecCmd = validateExecCmd(execCmd)
}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(AtomCommandSubscription, templates)
