'use strict'

/* IMPORT */

const {packages} = global.atom
const {registerSpawnCommand} = packages.getLoadedPackage('quick-spawn').api

/* DO THINGS */

registerBash()

/* DEFINE HOW TO DO THINGS */

function registerBash () {
  const bashSpawnSubscription = registerSpawnCommand({
    execCmd: 'bash',
    workingDirectory: getWorkingDirectory(), // optional, determines Bash's first working-directory, you can change it later by 'cd new-wdir'
    attached: false, // optional, default to false, determines whether Bash process should be attached to Atom process
    suspended: true, // optional, default to true; if false, Bash would be started right after quick-spawn's activation
    __proto__: null // optional (of course), avoid the mess from Object.prototype
  })
  return bashSpawnSubscription
}
