'use strict'

const applyClass = require('../utils/apply-class.js')
const {validateTypedFunction} = require('../utils/validate.js')
const evtlisten = require('../utils/arrow-listener.js')
const {commands} = global.atom

function AtomCommandSubscription (descriptor, derived, resource) {
  const {atomCmd, atomTarget} = descriptor
  const {execCmd} = derived
  const {setCurrentProcess, getCurrentProcess} = resource
  const getExecCmd = validateTypedFunction(execCmd, 'string')
  const disposable = commands.add(
    atomTarget,
    atomCmd,
    evtlisten(targetElement => {

    })
  )
  const out = {
    dispose () {
      disposable.dispose()
    },
    __proto__: this
  }
  return out
}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(AtomCommandSubscription, templates)
