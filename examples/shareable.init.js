'use strict'

/* IMPORT */

const {packages, workspace} = global.atom
const {registerSpawnCommand} = packages.getLoadedPackage('quick-spawn').api

/* DO THINGS */

registerTempCenteredBash()

/* DEFINE HOW TO DO THINGS */

function registerTempCenteredBash () {
  const spawnSubscription = registerSpawnCommand({
    execCmd: 'bash', // required; program need to be executed
    execArguments: , // optional, default to empty array; provides command-line arguments for Bash
    workingDirectory: getWorkingDirectory(), // optional; determines Bash's first working-directory, you can change it later by 'cd new-wdir'
    attached: false, // optional, default to false; determines whether Bash process should be attached to Atom process
    suspended: true, // optional, default to true; if false, Bash would be started right after quick-spawn's activation
    __proto__: null // optional (of course); avoid the mess from Object.prototype
  })
  const mainAtomCommandSubscription = spawnSubscription.registerAtomCommand({
    atomCmd: 'view-bash:main', // required; register an Atom command, appear as "View Bash: Main" in Command-Palette
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
    tab: 'panel', // now is panel
    atomKeybinding: 'ctrl-shift-b x',
    __proto__: null
  })
  mirroredAtomCommandSubscription.on(
    'destroy',
    () => mirroredAtomCommandSubscription.getViewSubscription().destroy()
  )
  return {spawnSubscription, mainAtomCommandSubscription, mirroredAtomCommandSubscription}
}

function getWorkingDirectory () {
  return workspace // → Just global.atom.workspace, we imported it, remember?
    .getActivatePaneItem() // → Opening Tab
    .getDirectoryPath() // → Path to Directory which contains File in Opening Tab
}
