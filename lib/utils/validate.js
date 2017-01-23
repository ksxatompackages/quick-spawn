'use strict'

const {isIterable} = require('x-iterable-utils')

const convertors = {
  string: String,
  __proto__: null
}

const validateTypedFunction = (value, type) => {
  switch (typeof value) {
    case 'function':
      const convert = convertors[type]
      return (...args) => convert(value(...args))
    case type:
      return () => value
    default:
      throw new TypeError('Invalid type')
  }
}

validateTypedFunction.array = (value, type) => {
  switch (typeof value) {
    case 'function':
      const convert = convertors[type]
      return (...args) => [...value(...args)].map(convert)
    case type:
      return () => [value]
    case 'object':
      if (!object) throw new TypeError('Value cannot be null')
      if (isIterable(value)) return () => [...value]
    default:
      throw new TypeError(`Invalid type of value: ${typeof value}`)
  }
}

module.exports = {
  validateTypedFunction
}
