'use strict'

const sameProperty = require('../utils/same-property.js')
const {create} = Object
const DONOTHING = () => {}

function applyInstance (instance, templates, skip, ...rest) {
  const out = templates.reduce(
    (prev, pattern) => {
      if (skip.has(pattern)) {
        return prev
      }
      const {build = DONOTHING, templates = [], properties = {}} = pattern
      const middle = build(templates.length ? applyInstance(prev, templates, skip, ...rest) : prev, ...rest)
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

module.exports = (templates, ...left) => (instance, ...right) => applyInstance(instance, templates, new Set(), ...left, ...right)
