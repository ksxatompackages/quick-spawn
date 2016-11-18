'use strict'

const applyClass = require('../utils/apply-class.js')

function AtomCommandSubscription (derived, resource) {
  
}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(AtomCommandSubscription, templates)
