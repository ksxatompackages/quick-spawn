# `AtomCommandSubscription` ![stable]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Classes](.) → [`AtomCommandSubscription`](./atom-command-subscription.md)

## Overview

Being returned object when call <code>[APIRootObject](.classes/api.md)::registerSingleSubscription</code>. Manages spawned process as well and registered atom command.

## Basic Attributes

* Super: None ![experimental]

* Template:
  - [`EventEmitter`](../templates/event-emitter.md) ![experimental]
  - [`Disposable`](../templates/disposable.md) ![stable]
  - [`ObjectDelegate`](../templates/object-delegate.md) ![stable]

## Events

### Show

**Attributes**

* Name: `show` ![stable]

* Parameters
  - `Object param` ![stable]
    - <code>[ViewSubscription](./view-subscription.md) viewSubscription</code> ![stable]
    - <code>[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) targetElement</code> ![experimental]
    - `AtomCommandSubscription subscription` ![experimental]

**Description**

* Emits when a view was shown via executing an atom-command

### Hide

**Attributes**

* Name: `hide` ![stable]

* Parameters
  - `Object param` ![stable]
    - <code>[ViewSubscription](./view-subscription.md) viewSubscription</code> ![stable]
    - <code>[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) targetElement</code> ![experimental]
    - `AtomCommandSubscription subscription` ![experimental]

**Description**

* Emits when a view is closed by any mean

### Spawn

**Attributes**

* Name: `spawn` ![stable]

* Parameters
  - `Object param` ![stable]
    - <code>[SpawnSubscription](./spawn-subscription.md) spawnSubscription</code> ![stable]
    - `AtomCommandSubscription commander` ![stable]
    - <code>[SpawnSubscriptionDescriptor](../structures/spawn-subscription-descriptor.md) spawnSubscriptionDescriptor</code> ![experimental]
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
    - <code>[SpawnSubscription](./spawn-subscription.md) spawnSubscription</code> ![stable]
    - `unsigned int status` ![stable]
    - `string signal` ![stable]

**Description**

* Emits when the child process exits

### Destroy

**Attributes**

* Name: `destroy` ![stable]

* Parameters
  - `Object param` ![stable]
    - <code>[SpawnSubscription](./spawn-subscription.md) spawnSubscription</code> ![stable]
    - `AtomCommandSubscription subscription` ![experimental]

**Description**

* Emits when the bound `SpawnSubscription` get destroyed

## Functions and Methods

### Get Current View ![stable]

**Attributes**

* Name: `getCurrentView` ![stable]

* Position:
  - Instance ![stable]

* Independent of `this` ![stable]

* Return:
  - <code>Set&lt;[ViewSubscription](./view-subscription.md)&gt;</code> ![experimental]
  - [`ViewSubscription`](./view-subscription.md) ![stable]
  - `null` ![stable]

**Description**

* If commands is `multi-view`, returns a `Set` of `ViewSubscription` instances

* If commands is `single-view`:
  - Returns `ViewSubscription` if the corresponding atom-view is opening
  - Returns `null` if no atom-view is opening

### Hide ![stable]

**Attributes**

* Name: `hide` ![stable]

* Position:
  - Instance ![stable]

* Dependent on `this` ![experimental]

* Return: None ![experimental]

**Description**

* Hide (every) view(s) created by the atom-command

## Properties

### Current View ![experimental]

**Attributes**

* Name: `view` ![experimental]

* Configuration:
  - Readable ![fixed]
  - Unwritable ![experimental]

* Return:
  - <code>Set&lt;[ViewSubscription](./view-subscription.md)&gt;</code> ![experimental]
  - [`ViewSubscription`](./view-subscription.md) ![stable]
  - `null` ![stable]

**Description**

 * Similar to <code>AtomCommandSubscription::[getCurrentView](#get-current-view-)</code>

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/deprecated.svg
