'use strict'

/* IMPORT */

const {packages, workspace, commands} = global.atom
const {registerSpawnCommand} = require(packages.resolvePackagePath('quick-spawn'))

/* DO THINGS */

// NOTE:
//  → The following function-calls are not all necessary
//  → Keep only what you need
registerTempCenteredBash()
registerTempMultiViewBash()
registerBackgroundBash()
registerEverything()

/* DEFINE HOW TO DO THINGS */

// DESCRIPTION: registerTempCenteredBash
//  → Distinct:
//   * Bash process won't be spawned until one of two commands is shown
//   * Bash process being kept alive by Main View and keeping Mirror View alive
//  → Registers a Bash spawn-command
//  → Registers 2 atom-commands with 2 view-prototypes and 2 keyboard-shortcuts
//   * Main View
//    - Appears as a pane-item (with a tab)
//    - Log info to DevTools console every time you show/hide the view
//    - Log info to DevTools console when the spawned Bash process finish
//   * Mirror View
//    - Appears as a panel
//    - Auto destroy when spawn Bash process finish
//  → Returns 3 created subscriptions as an object
//   - spawnSubscription (spawn-subscription)
//   - mainAtomCommandSubscription (atom-command-subscription)
//   - mirroredAtomCommandSubscription (atom-command-subscription)
function registerTempCenteredBash () {
  const spawnSubscription = registerSpawnCommand({
    execCmd: 'bash', // required; program need to be executed
    execArguments: [], // optional, default to empty array; provides command-line arguments for Bash
    workingDirectory: getWorkingDirectory, // optional; determines Bash's first working-directory, you can change it later by 'cd new-wdir'
    attached: false, // optional, default to false; determines whether Bash process should be attached to Atom process
    suspended: true, // optional, default to true; if false, Bash would be started right after quick-spawn's activation
    __proto__: null // optional (of course); avoid the mess from Object.prototype
  })
  const mainAtomCommandSubscription = spawnSubscription.registerAtomCommand({
    atomCmd: 'view-bash:main', // required; register an Atom command, appear as "View Bash: Main" in Command-Palette
    atomTarget: 'atom-workspace', // required; determines where to attach the atom-command
    type: 'tab', // optional, default to 'tab'
    viewStdIO: ['stdin', 'stdout', 'stderr'], // optional, determines whether stdin, stdout and stderr should be shown; shows all three by default
    atomKeybinding: 'ctrl-shift-b m', // optional
    oncreated (viewSubscription) { // optional, default to empty function; function takes 1 argument: created view-subscription
      const spawnSubscription = viewSubscription.getSpawnSubscription()
      viewSubscription.on('show', () => console.log('show', viewSubscription))
      viewSubscription.on('hide', () => console.log('hide', viewSubscription))
      viewSubscription.on('hide', () => spawnSubscription.destroy()) // terminate the process when this view get closed
      viewSubscription.on('destroy', () => console.log('destroy', spawnSubscription)) // emit when the spawned process exited
    },
    __proto__: null
  })
  const mirroredAtomCommandSubscription = spawnSubscription.registerAtomCommand({
    atomCmd: 'view-bash:mirror',
    atomTarget: 'atom-workspace',
    type: 'panel', // now is panel
    atomKeybinding: 'ctrl-shift-b x',
    __proto__: null
  })
  mirroredAtomCommandSubscription.on(
    'show',
    event => {
      commands.dispath(event.target, mainAtomCommandSubscription.atomCmd)
      mainAtomCommandSubscription.once('show', () => mirroredAtomCommandSubscription.getCurrentView().focus())
    }
  )
  mirroredAtomCommandSubscription.on(
    'destroy',
    () => mirroredAtomCommandSubscription.getViewSubscription().destroy()
  )
  return {spawnSubscription, mainAtomCommandSubscription, mirroredAtomCommandSubscription}
}

// DESCRIPTION: registerTempMultiViewBash
//  → Distinct:
//   * Bash runs when have at least 1 view opening
//   * Bash exits when all views (except 'hidden' one) close
//  → Register a Bash spawn-command
//  → Register 4 atom-commands for each one of 'tab', 'panel', 'dialog' and 'hidden'
//  → Return 5 created subscriptions and 1 array of 4 atom-command-subscriptions
//   * tabAtomCommandSubsciption
//   * panelAtomCommandSubsciption
//   * dialogAtomCommandSubsciption
//   * hiddenAtomCommandSubsciption
//   * everyAtomCommandSubsciptions (array)
function registerTempMultiViewBash () {
  const spawnSubscription = registerSpawnCommand({
    execCmd: 'bash',
    __proto__: null
  })
  const registerAtomCommand = type => spawnSubscription.registerAtomCommand({
    atomCmd: 'view-bash:' + type,
    atomTarget: 'atom-workspace',
    type,
    __proto__: null
  })
  const tabAtomCommandSubsciption = registerAtomCommand('tab')
  const panelAtomCommandSubsciption = registerAtomCommand('panel')
  const dialogAtomCommandSubsciption = registerAtomCommand('dialog')
  const hiddenAtomCommandSubsciption = registerAtomCommand('hidden')
  const everyAtomCommandSubsciptions = [
    tabAtomCommandSubsciption,
    panelAtomCommandSubsciption,
    dialogAtomCommandSubsciption,
    hiddenAtomCommandSubsciption
  ]
  let shownViewCount = 0
  for (const subscription of everyAtomCommandSubsciptions) {
    subscription.on('show', () => ++shownViewCount)
    subscription.on('hide', () => --shownViewCount || spawnSubscription.destroy())
  }
  return {
    spawnSubscription,
    tabAtomCommandSubsciption,
    panelAtomCommandSubsciption,
    dialogAtomCommandSubsciption,
    hiddenAtomCommandSubsciption,
    everyAtomCommandSubsciptions
  }
}

// DESCRIPTION: registerBackgroundBash
function registerBackgroundBash () {
  const spawnSubscription = registerSpawnCommand({
    execCmd: 'bash',
    suspended: false,
    __proto__: null
  })
  const registerSpawnCommand = detachedTextBox => spawnSubscription.registerAtomCommand({
    atomCmd: 'background-bash:' + detachedTextBox,
    atomTarget: 'atom-workspace',
    type: 'hidden',
    detachedTextBox, // optional; default to 'none'
    __proto__: null
  })
  const everyAtomCommandSubsciptions = ['mini-editor', 'editor', 'tab'].map(registerSpawnCommand)
  return {spawnSubscription, everyAtomCommandSubsciptions}
}

// DESCRIPTION: registerEverything
function registerEverything () {
  const spawnSubscription = registerSpawnCommand({
    execCmd: 'bash',
    __proto__: null
  })
  const registerAtomCommand = (type, detachedTextBox) => spawnSubscription.registerAtomCommand({
    atomCmd: 'background-bash:' + type,
    atomTarget: 'atom-workspace',
    type,
    detachedTextBox,
    __proto__: null
  })
  const everyAtomCommandSubsciptions = []
  for (const textbox of ['none', 'mini-editor', 'editor', 'tab']) {
    for (const type of ['tab', 'panel', 'dialog', 'hidden']) {
      const subscription = registerAtomCommand(type, textbox)
      everyAtomCommandSubsciptions.push(subscription)
      everyAtomCommandSubsciptions[`${textbox}::${type}`] = subscription
    }
  }
  return {spawnSubscription, everyAtomCommandSubsciptions}
}

// DESCRIPTION: getWorkingDirectory
//  → Return a Path to Directory that contains Opening File
function getWorkingDirectory () {
  return workspace // → Just global.atom.workspace, we imported it, remember?
    .getActivatePaneItem() // → Opening Tab
    .getDirectoryPath() // → Path to Directory which contains File in Opening Tab
}
