'use strict'

const applyClass = require('../templates/apply-class.js')

function AtomCommandSubscription () {}

const templates = ['event-emitter', 'disposable', 'object-delegate']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(AtomCommandSubscription, templates)
