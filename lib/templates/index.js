'use strict'

const sameProperty = require('../utils/same-property.js')

const DONOTHING = () => {}

function apply (builder, templates, skip) {
  const EventEmitter = templates.reduce(
    (prev, pattern) => {
      if (skip.has(pattern)) {
        return prev
      }
      const {build = DONOTHING, templates = [], instance = {}, properties = {}} = pattern
      const base = templates.length ? apply(prev, templates, skip) : prev
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

module.exports = (builder, templates) => apply(builder, templates, new Set())
