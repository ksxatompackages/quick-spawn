'use strict'

const sameProperty = require('../utils/same-property.js')
const {create} = Object
const DONOTHING = () => {}

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

module.exports = templates => instance => applyInstance(instance, templates, new Set())
