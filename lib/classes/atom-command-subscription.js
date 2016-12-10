'use strict'

const {spawn} = require('child_process')
const {HOME} = require('process').env
const applyClass = require('../utils/apply-class.js')
const applyInstance = require('../utils/apply-instance.js')
const {validateTypedFunction} = require('../utils/validate.js')
const Disposable = require('../templates/disposable.js')
const applyProto = applyInstance([Disposable])
const {commands} = global.atom

function AtomCommandSubscription (descriptor, derived, resource) {
  const {atomCmd, atomTarget} = descriptor
  const {execCmd, execArguments = [], workingDirectory = HOME, attached = false, suspended = true} = derived
  const {setCurrentProcess, getCurrentProcess} = resource
  const getExecCmd = validateTypedFunction(execCmd, 'string')
  const getExecArguments = validateTypedFunction.array(execArguments, 'string')
  const getWorkingDirectory = validateTypedFunction(workingDirectory, 'string')
  const detached = !attached
  const createChildProcess = () => {
    const cwd = getWorkingDirectory()
    const subprocess = spawn(getExecCmd(), getExecArguments(), {cwd, detached})
    return subprocess
  }
  const activeCurrentProcess = () => {
    let subprocess = getCurrentProcess()
    if (!subprocess) {
      subprocess = createChildProcess()
      setCurrentProcess(subprocess)
    }
    return subprocess
  }
  const disposable = commands.add(
    atomTarget,
    atomCmd,
    ({currentTarget}) => {
      // activeCurrentProcess get called here...

    }
  )
  const disposalact = () => disposable.dispose()
  const out = {
    __proto__: applyProto(this, {disposalact})
  }
  suspended || activeCurrentProcess()
  return out
}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(AtomCommandSubscription, templates)
