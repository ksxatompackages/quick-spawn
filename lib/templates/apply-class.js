'use strict'

const sameProperty = require('../utils/same-property.js')
const DONOTHING = () => {}

function applyClass (builder, templates, skip) {
  const out = templates.reduce(
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
      for (const name in properties) {
        sameProperty(name, result, properties)
      }
      const {prototype} = result
      for (const name in instance) {
        sameProperty(name, prototype, instance)
      }
      return result
    },
    class extends builder {}
  )
  return class extends out {}
}

module.exports = (builder, templates) => applyClass(builder, templates, new Set())
