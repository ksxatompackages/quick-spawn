'use strict'

const {
  getOwnPropertyDescriptor,
  defineProperty
} = Object

const sameProperty = (name, target, source) =>
  defineProperty(target, name, getOwnPropertyDescriptor(source, name))

module.exports = sameProperty
