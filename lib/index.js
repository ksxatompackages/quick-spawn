'use strict'

const {CompositeDisposable} = require('atom')
const once = require('exec-once')
const jtry = require('just-try')
const {freeze} = Object
const getapi = once(() => require('./api.js'))

const emiterror = (name, error) => {
  const message = `APIRootObject: Failed to emit ${name}`
  global.atom.notifications.addError(message, {details: error.stack})
  console.warn(message)
  console.error(error)
}

const tryemit = name =>
  jtry(() => getapi().emit(name), error => emiterror(name, error))

let subscriptions = null

const activate = state => {
  subscriptions = new CompositeDisposable()
  tryemit('activate')
}

const deactivate = () => {
  subscriptions.dispose()
  subscriptions = null
  tryemit('deactivate')
}

module.exports = freeze({
  activate,
  deactivate,
  get subscriptions () {
    return subscriptions
  },
  get api () {
    return getapi()
  }
})
