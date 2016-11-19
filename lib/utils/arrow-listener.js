module.exports = handle =>
  function (...args) { return handle(this, ...args) }
