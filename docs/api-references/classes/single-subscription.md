# `SingleSubscription` ![stable]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Classes](.) → [`SingleSubscription`](./single-subscription.md)

## Overview

Being returned object when call <code>[APIRootObject](.classes/api.md)::registerSingleSubscription</code>. Observes and Controls spawned process.

## Basic Attributes

* Super: None ![experimental]

* Template:
  - [`EventEmitter`](../templates/event-emitter.md) ![experimental]
  - [`Disposable`](../templates/disposable.md) ![stable]

## Events

### Show ![stable]

**Attributes**

* Name: `show` ![stable]

* Parameters
  - `Object param` ![experimental]
    - <code>[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) targetElement</code> ![experimental]

**Description**

* Emits when a view was shown via executing an atom-command

### Hide ![stable]

**Attributes**

* Name: `hide` ![stable]

* Parameters
  - `Object param` ![experimental]
    - <code>[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) targetElement</code> ![experimental]

**Description**

* Emits when a view is closed by any mean

### Spawn ![stable]

**Attributes**

* Name: `spawn` ![stable]

* Parameters
  - `Object param` ![stable]
    - <code>[ChildProcess](https://nodejs.org/api/child_process.html#child_process_class_childprocess) process</code> ![experimental]
    - [`Object config`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options) ![experimental]
      - `string command` ![experimental]
      - `Array<string> args` ![experimental]
      - `Object options` ![experimental]

**Description**

* Emits when the command is executed via the bound `SingleSubscription` instance

### Exit ![stable]

**Attributes**

* Name: `exit` ![stable]

* Parameters
  - `Object param` ![stable]
    - `string command` ![experimental]
    - `unsigned int status` ![stable]
    - `string signal` ![stable]

**Description**

* Emits when the child process exits

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/deprecated.svg
