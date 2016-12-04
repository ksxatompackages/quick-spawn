'use strict'

const applyClass = require('../utils/apply-class.js')
const applyInstance = require('../utils/apply-instance.js')
const {validateTypedFunction} = require('../utils/validate.js')
const evtlisten = require('../utils/arrow-listener.js')
const Disposable = require('../templates/disposable.js')
const applyProto = applyInstance([Disposable])
const {commands} = global.atom

function AtomCommandSubscription (descriptor, derived, resource) {
  const {atomCmd, atomTarget} = descriptor
  const {execCmd} = derived
  const {setCurrentProcess, getCurrentProcess} = resource
  const getExecCmd = validateTypedFunction(execCmd, 'string')
  const disposable = commands.add(
    atomTarget,
    atomCmd,
    ({currentTarget}) => {

    }
  )
  const disposalact = () => disposable.dispose()
  const out = {
    __proto__: applyProto(this, {disposalact})
  }
  return out
}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(AtomCommandSubscription, templates)
