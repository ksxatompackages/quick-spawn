'use strict'

const {notStrictEqual} = require('assert')

const fn = (value, name) =>
  notStrictEqual(value, undefined, `${name} must not be undefined`)

fn.object = object => {
  for (const name in object) {
    assert(object[name], name)
  }
}

module.exports = fn
