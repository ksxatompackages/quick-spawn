'use strict'

const {spawn} = require('child_process')
const {HOME} = require('process').env
const applyClass = require('../utils/apply-class.js')
const applyInstance = require('../utils/apply-instance.js')
const assert = require('../utils/required-value.js').object
const {validateTypedFunction} = require('../utils/validate.js')
const {createMenuTemplate} = require('../utils/menu.js')
const Disposable = require('../templates/disposable.js')
const applyProto = applyInstance([Disposable])
const {commands, keymaps, menu, contextMenu} = global.atom

function AtomCommandSubscription (descriptor, derived, resource) {
  const {atomCmd, atomTarget, atomKeybinding, atomMenuBar, atomContextMenu} = descriptor
  const {execCmd, execArguments = [], workingDirectory = HOME, attached = false, suspended = true} = derived
  const {setCurrentProcess, getCurrentProcess, getSpawnSubscription} = resource
  const getExecCmd = validateTypedFunction(execCmd, 'string')
  const getExecArguments = validateTypedFunction.array(execArguments, 'string')
  const getWorkingDirectory = validateTypedFunction(workingDirectory, 'string')
  const detached = !attached
  const createChildProcess = event => {
    const subscription = {atomCommandSubscription: out, spawnSubscription: getSpawnSubscription()}
    const cmddefarg = {subscription, event}
    const cwd = getWorkingDirectory(cmddefarg)
    const execOptions = {cwd, detached}
    const subprocess = spawn(getExecCmd(cmddefarg), getExecArguments(cmddefarg), execOptions)
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
  const activeCurrentProcess = event => {
    let subprocess = getCurrentProcess(event)
    if (!subprocess) {
      subprocess = createChildProcess(event)
      setCurrentProcess(subprocess)
    }
    return subprocess
  }
  const disposable = commands.add(
    atomTarget,
    atomCmd,
    event => {
      const {currentTarget} = event
      const currentProcess = activeCurrentProcess(event)
      // open view here... but... how?
    }
  )
  const disposalact = () => disposable.dispose()
  const out = {
    __proto__: applyProto(this, {disposalact})
  }
  assert({atomCmd, atomTarget, execCmd})
  suspended || setTimeout(activeCurrentProcess)
  atomKeybinding && registerAtomKeybinding(atomKeybinding, atomCmd, atomTarget)
  atomMenuBar && registerAtomMenuBar(atomMenuBar, atomCmd)
  atomContextMenu && registerAtomContextMenu(atomContextMenu, atomCmd, atomTarget)
  return out
}

function registerAtomKeybinding (keybinding, command, target) {
  switch (typeof keybinding) {
    case 'string':
      keymaps.add(__filename, {
        [atomTarget]: {[keybinding]: command}
      })
      break
    case 'object':
      for (const key of keybinding) {
        registerAtomKeybinding(key, command, target)
      }
      break
    default:
      throw new TypeError('Invalid type of Keybinding')
  }
}

function registerAtomMenuBar (path, command) {
  menu.add(createMenuTemplate(path, command).first)
}

function registerAtomContextMenu (path, command, target) {
  contextMenu.add({
    [target]: createMenuTemplate(path, command).first
  })
}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(AtomCommandSubscription, templates)
