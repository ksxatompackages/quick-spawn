'use strict'

const {join} = require('path')
const {strictEqual} = require('assert')

function main (Disposable, {object}) {
  const applyClass = require(join(object, '../../utils/apply-class.js'))
  let out = null
  class MainDisposable extends applyClass(class {}, [Disposable]) {
    constructor () {
      const dispose = () => { out = 'expected' }
      super({dispose})
    }
  }
  const disposable = new MainDisposable()
  strictEqual(disposable.disposed, false, 'Initially, disposable.disposed must be false')
  for (let count = 5; count; --count) {
    disposable.dispose()
    strictEqual(disposable.disposed, true, 'At any time after calling dispose, disposable.disposed must always be false')
  }
  return [disposable]
}

// function main (Disposable, {object}) {
//   const applyClass = require(join(object, '../../utils/apply-class.js'))
//   let out = null
//   const dispose = () => { out = 'expected' }
//   class MainDisposable extends applyClass(class {}, [Disposable({dispose})]) {}
//   const disposable = new MainDisposable()
//   strictEqual(disposable.disposed, false, 'Initially, disposable.disposed must be false')
//   for (let count = 5; count; --count) {
//     disposable.dispose()
//     strictEqual(disposable.disposed, true, 'At any time after calling dispose, disposable.disposed must always be false')
//   }
//   return [disposable]
// }

module.exports = main
