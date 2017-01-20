'use strict'

const {spawn} = require('child_process')
const {HOME} = require('process').env
const applyClass = require('../utils/apply-class.js')
const applyInstance = require('../utils/apply-instance.js')
const assert = require('../utils/required-value.js').object
const {validateTypedFunction} = require('../utils/validate.js')
const Disposable = require('../templates/disposable.js')
const applyProto = applyInstance([Disposable])
const {commands} = global.atom

function AtomCommandSubscription (descriptor, derived, resource) {
  const {atomCmd, atomTarget} = descriptor
  const {execCmd, execArguments = [], workingDirectory = HOME, attached = false, suspended = true} = derived
  const {setCurrentProcess, getCurrentProcess, getSpawnSubscription} = resource
  const getExecCmd = validateTypedFunction(execCmd, 'string')
  const getExecArguments = validateTypedFunction.array(execArguments, 'string')
  const getWorkingDirectory = validateTypedFunction(workingDirectory, 'string')
  const detached = !attached
  const createChildProcess = () => {
    const cwd = getWorkingDirectory()
    const execOptions = {cwd, detached}
    const subprocess = spawn(getExecCmd(), getExecArguments(), execOptions)
    out.emit('spawn', {
      spawnSubscription: getSpawnSubscription(),
      commander: out,
      spawnSubscriptionDescriptor: descriptor,
      process: subprocess,
      config: {
        command: execCmd,
        args: execArguments,
        options: execOptions
      }
    })
    subprocess.on('exit', (status, signal) => {
      out.emit('exit', {
        spawnSubscription: getSpawnSubscription(),
        command: execCmd,
        status,
        signal
      })
    })
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
      const currentProcess = suspended ? activeCurrentProcess() : getCurrentProcess()

    }
  )
  const disposalact = () => disposable.dispose()
  const out = {
    __proto__: applyProto(this, {disposalact})
  }
  assert({atomCmd, atomTarget, execCmd})
  suspended || setTimeout(activeCurrentProcess)
  return out
}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(AtomCommandSubscription, templates)
