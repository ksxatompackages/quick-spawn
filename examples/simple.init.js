'use strict'

/* IMPORT */

const {packages, workspace} = global.atom
const {registerSingleSubscription} = require(packages.resolvePackagePath('quick-spawn'))

/* DO THINGS */

// NOTE:
//  → Not every function-calls below is necessary
//  → Keep only what you need
registerWorkspaceBash()
registerSidebarBash()

/* DEFINE HOW TO DO THINGS */

// DESCRIPTION: registerWorkspaceBash
//  → Distinct:
//   * Registers for workspace
//   * Uses getTabDirectory() as first current-working-directory
//  → Returns 1 subscription
function registerWorkspaceBash () {
  return registerSingleSubscription({
    execCmd: 'bash', // required; program needs to be executed
    atomCmd: 'simple-bash:workspace', // required; registers an atom-command, appears as "Simple Bash: Workspace" in Command-Palette
    atomTarget: 'atom-workspace', // required; determines where to attach the atom-command
    workingDirectory: getTabDirectory, // optional; determines Bash's first working-directory, you can change it later by 'cd new-wdir'
    attached: false, // optional, default to false; determines whether Bash process should be attached to Atom process
    suspended: true, // optional, default to true; if false, Bash would be started right after quick-spawn's activation
    viewStdIO: ['stdin', 'stdout', 'stderr'], // optional, determines whether stdin, stdout and stderr should be shown; shows all three by default
    type: 'tab', // optional, default to 'tab'
    atomKeybinding: 'ctrl-shift-b s w', // optional
    atomMenuBar: ['Packages', 'Quick Spawn', 'Simple Bash', 'For Opening Tab'], // optional
    atomContextMenu: { // optional
      target: 'atom-workspace', // required
      path: ['Quick Spawn', 'Simple Bash'], // required
      __proto__: null
    },
    exitOnClose: true, // optional, default to true; should the spawned process be terminated when close the view
    closeOnExit: true, // optional, default to false; should the view be closed when bash exits
    detachedTextBox: 'none', // optional, default to 'none'
    __proto__: null // optional (of course); avoid the mess from Object.prototype
  })
}

// DESCRIPTION: registerSidebarBash
//  → Distinct:
//   * Registers for directory tree-view
//   * Uses getSidebarItemDirectory() as first current-working-directory
//  → Returns 1 subscription
function registerSidebarBash () {
  const target = '.tree-view .entry'
  return registerSingleSubscription({
    execCmd: 'bash',
    atomCmd: 'simple-bash:tree-view-entry',
    atomTarget: target,
    workingDirectory: getSidebarItemDirectory,
    atomContextMenu: {
      target,
      path: ['Quick Spawn', 'Simple Bash', 'For this File/Folder'],
      __proto__: null
    },
    closeOnExit: true,
    __proto__: null
  })
}

// DESCRIPTION: getTabDirectory
function getTabDirectory () {
  return workspace.getActivePaneItem().getDirectoryPath()
}
