'use strict'

const sameProperty = require('../utils/same-property.js')
const DONOTHING = () => {}

function applyClass (origin, templates, skip) {
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
    class extends origin {}
  )
  return class extends out {}
}

module.exports = (origin, templates) => applyClass(origin, templates, new Set())
