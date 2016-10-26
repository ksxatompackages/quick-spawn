'use strict'

const sameProperty = require('./utils/same-property.js')

const DONOTHING = () => {}

function apply (builder, templates) {
  const EventEmitter = templates.reduce(
    (prev, {build = DONOTHING, templates = [], instance = {}, properties = {}} = {}) => {
      const base = templates.length ? apply(prev, templates) : prev
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

module.exports = apply
