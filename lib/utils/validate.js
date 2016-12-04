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

validateTypedFunction.array = (array, type) => {
  const fnarr = array.map(value => validateTypedFunction(value, type))
  return () => fnarr.map(fn => fn())
}

module.exports = {
  validateTypedFunction
}
