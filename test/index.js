'use strict'

const {join} = require('path')
const {exit} = require('process')
const {readdir, stat} = require('fs-promise')
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
        item => [tester, object]
          .map(dir => join(dir, item))
      )
      .map(
        ([tester, object]) => function * () {
          const attr = yield stat(path)
          if (attr.isFile()) {
            const testfn = require(tester)
            const module = require(object)
            const result = testfn(module, {tester, object})
            return Promise.resolve({result, testfn, module})
          }
          if (attr.isDirectory()) {
            const result = yield co(() => main(tester, object))
            return Promise.resolve({result})
          }
        }
      )
      .map(co)
      .map(
        promise => promise
          .catch(error => ({error}))
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
    return Promise.reject(failed)
  } else {
    return Promise.resolve(succeed)
  }
}
