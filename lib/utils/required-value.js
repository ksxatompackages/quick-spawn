'use strict'
const {notStrictEqual} = require('assert')
module.exports = (value, name) =>
  notStrictEqual(value, undefined, `${name} must not be undefined`)
