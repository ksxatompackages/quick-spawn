'use strict'

const createDisposable = require('./disposable.js')
const {assign} = Object
const {iterator} = Symbol

const build = self => {
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
      return createDisposable(self, dispose)
    }
    if (typeof handle[iterator] === 'function') {
      const array = [...handle].map(x => on(list, x))
      const dispose = () => array.forEach(x => x.dispose())
      return createDisposable(self, dispose)
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
    for (const handle of getHandleList(name)) {
      setTimeout(handle, 0, ...args)
    }
    return self
  }
  assign(self, {on, once, emit})
}

module.exports = {build}
