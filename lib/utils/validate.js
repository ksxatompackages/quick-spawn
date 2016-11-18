'use strict'

const convertors = {
  string: String,
  array: Array.from,
  __proto__: null
}

const validateTypedFunction = (value, type) => {
  switch (typeof value) {
    case 'function':
      const convert = convertors[type]
      return () => convert(value())
    case type:
      return () => value
    default:
      throw new TypeError('Invalid type')
  }
}

module.exports = {
  validateTypedFunction
}
