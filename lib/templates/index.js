'use strict'

const sameProperty = require('../utils/same-property.js')
const {create} = Object
const DONOTHING = () => {}

function applyClass (builder, templates, skip) {
  const EventEmitter = templates.reduce(
    (prev, pattern) => {
      if (skip.has(pattern)) {
        return prev
      }
      const {build = DONOTHING, templates = [], instance = {}, properties = {}} = pattern
      const base = templates.length ? applyClass(prev, templates, skip) : prev
      class result extends base {
        constructor (...args) {
          super(...args)
          return build(this, args)
        }
      }
      for (const name of properties) {
        sameProperty(name, result, properties)
      }
      const {prototype} = result
      for (const name of instance) {
        sameProperty(name, prototype, instance)
      }
      return result
    },
    class extends builder {}
  )
  return class extends EventEmitter {}
}

function applyInstance (instance, templates, skip) {
  const out = templates.reduce(
    (prev, pattern) => {
      if (skip.has(pattern)) {
        return prev
      }
      const {build = DONOTHING, templates = [], properties = {}} = pattern
      const middle = build(templates.length ? applyInstance(prev, templates, skip) : prev)
      const next = create(typeof middle === 'object' ? middle : prev) // NOTE: if null, create(null)
      for (const name in properties) {
        sameProperty(name, next, properties)
      }
      return next
    },
    create(instance)
  )
  return create(out)
}

module.exports = {
  applyClass: (builder, templates) =>
    applyClass(builder, templates, new Set()),
  applyInstance: (instance, templates) =>
    applyInstance(instance, templates, new Set())
}
