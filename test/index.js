'use strict'

const {join} = require('path')
const {exit} = require('process')
const {readdir} = require('fs-promise')
const co = require('co')
const {info, error} = global.console

co(
  () => main(
    join(__dirname, 'main'),
    join(__dirname, '..', 'lib')
  )
)
  .then(
    () => {
      info('All tests passed.')
      exit(0)
    }
  )
  .catch(
    reason => {
      error('Some tests failed.')
      info('Reason', reason)
      exit(1)
    }
  )

function * main (tester, object) {
  const list = yield readdir(tester)
  const promise = Promise.all(
    list
      .map(
        item => resolve => {
          try {
            const test = require(join(tester, item))
            const module = require(join(object, item))
            const result = test(module)
            resolve({test, module, result})
          } catch (error) {
            resolve({error})
          }
        }
      )
      .map(
        fn => new Promise(fn)
      )
  )
  const result = yield promise
  const [succeed, failed] = result.reduce(
    ([succeed, failed], element) =>
      element.error
        ? [succeed, [...failed, element]]
        : [[...succeed, element], failed]
    ,
    [[], []]
  )
  info('Succeed:', succeed)
  info('Failed:', failed)
  if (failed.length) {
    throw failed
  } else {
    return succeed
  }
}
