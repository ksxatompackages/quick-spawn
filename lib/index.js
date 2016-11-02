'use strict'

const {CompositeDisposable} = require('atom')
const once = require('exec-once')
const {freeze} = Object
const getapi = once(() => require('./api.js'))

let subscriptions = null

const activate = state => {
  subscriptions = new CompositeDisposable()
  getapi().emit('activate')
}

const deactivate = () => {
  subscriptions.dispose()
  subscriptions = null
  getapi().emit('deactivate')
}

const serialize = () => ({})

module.exports = freeze({
  activate,
  deactivate,
  serialize,
  get subscriptions () {
    return subscriptions
  },
  get api () {
    return getapi()
  }
})
