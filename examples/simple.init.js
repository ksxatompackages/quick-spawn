'use strict'

/* IMPORT */

const {packages, workspace} = global.atom
const {registerSpawnCommand} = require(packages.resolvePackagePath('quick-spawn'))

/* DO THINGS */

// NOTE:
//  → Not every function-calls below is necessary
//  → Keep only what you need
registerWorkspaceBash()

/* DEFINE HOW TO DO THINGS */

// DESCRIPTION: registerWorkspaceBash
function registerWorkspaceBash () {
  return registerSpawnCommand({
    execCmd: 'bash',
    atomCmd: 'simple-bash:workspace',
    atomTarget: 'atom-workspace',
    workingDirectory: () => workspace.getActivePaneItem().getDirectoryPath(),
    attached: false,
    suspended: true,
    viewStdIO: ['stdin', 'stdout', 'stderr'],
    type: 'tab',
    atomKeybinding: 'ctrl-shift-b s w',
    exitOnClose: true,
    closeOnExit: true,
    detachedTextBox: 'none'
  })
}
