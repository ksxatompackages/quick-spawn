'use strict'

const {CompositeDisposable} = require('atom')
const {freeze} = Object

let subscriptions = null

const activate = state => {
  subscriptions = new CompositeDisposable()
}

const deactivate = () => {
  subscriptions.dispose()
  subscriptions = null
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
    return require('./api.js')
  }
})
