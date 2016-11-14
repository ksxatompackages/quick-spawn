'use strict'

const applyClass = require('../templates/apply-class.js')

function SingleSubscription () {}

const templates = ['event-emitter', 'disposable']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(SingleSubscription, templates)
