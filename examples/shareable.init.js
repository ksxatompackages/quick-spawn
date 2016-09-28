'use strict'

/* IMPORT */

const {packages, workspace, commands} = global.atom
const {registerSpawnCommand} = require(packages.resolvePackagePath('quick-spawn'))

/* DO THINGS */

registerTempCenteredBash()
registerTempMultiViewBash()

/* DEFINE HOW TO DO THINGS */

// DESCRIPTION: registerTempCenteredBash
//  → Distinct:
//   * Bash process won't be spawned until one of two commands is shown
//   * Bash process being kept alive by Main View and keeping Mirror View alive
//  → Registers a Bash exec-command
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
    execArguments: , // optional, default to empty array; provides command-line arguments for Bash
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
    tab: 'panel', // now is panel
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
function registerTempMultiViewBash () {}

// DESCRIPTION: getWorkingDirectory
//  → Return a Path to Directory that contains Opening File
function getWorkingDirectory () {
  return workspace // → Just global.atom.workspace, we imported it, remember?
    .getActivatePaneItem() // → Opening Tab
    .getDirectoryPath() // → Path to Directory which contains File in Opening Tab
}
