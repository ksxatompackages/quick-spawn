'use strict'

const {CompositeDisposable} = require('atom')
const {freeze} = Object

const activate = state => {
  subscriptions = new CompositeDisposable()
}

const deactivate = () => {
  subscriptions.dispose()
  subscriptions = null
}

const serialize = () => ({})

let subscriptions = null

module.exports = freeze({
  activate,
  deactivate,
  serialize,
  get subscriptions () {
    return subscriptions
  }
})
