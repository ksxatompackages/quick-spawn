'use strict'

const jtry = require('just-try')
const applyInstance = require('./apply-instance.js')
const EventListenerSubscription = require('./event-listener-subscription.js')
const {assign} = Object
const {iterator} = Symbol

const build = self => {
  const getevtsub = (self, dispose) =>
    applyInstance([EventListenerSubscription(dispose)])(self)
  const map = new Map()
  const getHandleList = name => {
    let list = map.get(name)
    if (!list) {
      list = new Set()
      map.set(name, list)
    }
    return list
  }
  const addListener = (list, handle) => {
    if (typeof handle === 'function') {
      list.add(handle)
      const dispose = () => {
        handle()
        list.delete(handle)
      }
      return getevtsub(self, dispose)
    }
    if (typeof handle[iterator] === 'function') {
      const array = [...handle].map(x => on(list, x))
      const dispose = () => array.forEach(x => x.dispose())
      return getevtsub(self, dispose)
    }
    throw new TypeError('Invalid type of handle')
  }
  const on = (name, handle) =>
    addListener(getHandleList(name), handle)
  const once = (name, handle) => {
    const newhandle = (...args) => {
      disposable.dispose()
      return handle(...args)
    }
    const disposable = on(name, newhandle)
    return disposable
  }
  const emit = (name, ...args) => {
    const errors = new Map()
    const values = new Map()
    for (const handle of getHandleList(name)) {
      jtry(() => handle(...args), x => errors.set(handle, x), x => values.set(handle, x))
    }
    return {errors, values, __proto__: self}
  }
  assign(self, {on, once, emit})
}

module.exports = {build}
