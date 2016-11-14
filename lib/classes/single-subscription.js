'use strict'

const applyClass = require('../utils/apply-class.js')

function SingleSubscription () {}

const templates = ['event-emitter', 'disposable']
  .map(name => `../templates/${name}.js`)

module.exports = applyClass(SingleSubscription, templates)
