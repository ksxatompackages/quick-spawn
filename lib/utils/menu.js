'use strict'

function createMenuTemplate (path, command) {
  const [label, ...rest] = path.reverse()
  const last = {label, command}
  const first = rest.reduce((submenu, label) => ({submenu, label}), last)
  return {first, last}
}

module.exports = {
  createMenuTemplate
}
