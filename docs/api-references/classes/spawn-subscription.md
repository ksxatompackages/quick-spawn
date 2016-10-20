# `SpawnSubscription` ![stable]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Classes](.) → [`SpawnSubscription`](./spawn-subscription.md)

## Overview

Being returned object when call <code>[SpawnSubscription](./classes/spawn-subscription.md)::registerSpawnCommand</code>. Observes and Controls registered atom-command as well as [`SpawnSubscription`](./classes/spawn-subscription.md) object.

## Basic Attributes

* Super: None ![experimental]

* Template:
  - [`EventEmitter`](../templates/event-emitter.md) ![experimental]
  - [`Disposable`](../templates/disposable.md) ![stable]
  - [`ObjectDelegate`](../templates/object-delegate.md) ![stable]

## Events

### Spawn

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

* Emits when the command is executed via the bound `SpawnSubscription` instance

### Exit

**Attributes**

* Name: `exit` ![stable]

* Parameters
  - `Object param` ![stable]
    - `unsigned int status` ![stable]
    - `string signal` ![stable]

**Description**

* Emits when the child process exits

## Functions and Methods

### Get Current Process ![stable]

**Attributes**

* Name: `getCurrentProcess` ![stable]

* Position:
  - Instance ![stable]

* Independent of `this` ![stable]

* Return:
  - <code>[ChildProcess](https://nodejs.org/api/child_process.html#child_process_class_childprocess) process</code> ![stable]
  - `null` ![stable]

**Description**

* Returns a `ChildProcess` instance if a child-process is running

* Returns `null` if there's no child-process that was opened via the spawn-subscription is running

### Destroy ![stable]

**Attributes**

* Name: `destroy`

* Position:
  - Instance ![stable]

* Independent from `this` ![experimental]

* Return: None ![experimental]

**Description**

* End the child-process (if there is) without unregister atom-command

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/deprecated.svg
