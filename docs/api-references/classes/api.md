# `APIRootObject` ![stable]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Classes](.) → [`APIRootObject`](./api.md)

## Overview

Result of expression `require(global.atom.resolvePackagePath('quick-spawn')).api`.

## Basic Attributes

* Super: None ![stable]

* Template: None ![experimental]

## Functions and Methods

### Register Single Subscription ![stable]

**Attributes**

* Name: `registerSingleSubscription` ![stable]

* Position:
  - Constructor ![experimental]
  - Instance ![stable]

* Independent of `this` ![stable]

* Return:
  - [`SingleSubscription`](./single-subscription.md) ![stable]

* Parameters:
  - <code>[SingleSubscriptionDescriptor](../structures/single-subscription-descriptor.md) descriptor</code> ![required] ![stable]

**Description**

* Registers a spawn-command and an atom-command

* Creates and Returns a `SingleSubscription` instance to manage registered commands

**Examples**

* [`simple.init.js` - line 25 → 40](https://github.com/ksxatompackages/quick-spawn/blob/latest/examples/simple.init.js#L25-L40)

* [`simple.init.js` - line 55 → 67](https://github.com/ksxatompackages/quick-spawn/blob/latest/examples/simple.init.js#L55-L67)

### Register Spawn Command ![stable]

**Attributes**

* Name: `registerSpawnCommand` ![stable]

* Position:
  - Constructor ![experimental]
  - Instance ![stable]

* Independent of `this` ![stable]

* Return:
  - [`SpawnSubscription`](./spawn-subscription.md) ![stable]

* Parameters:
  - <code>[SpawnSubscriptionDescriptor](../structures/spawn-command-descriptor.md) descriptor</code> ![required] ![stable]

**Description**

* Registers a spawn-command

* Creates and Returns a `SpawnSubscription` instance to manage registered spawn-command

**Examples**

* [`shareable.init.js` - line 38 → 45](https://github.com/ksxatompackages/quick-spawn/blob/latest/examples/shareable.init.js#L38-L45)

* [`shareable.init.js` - line 102 → 105](https://github.com/ksxatompackages/quick-spawn/blob/latest/examples/shareable.init.js#L102-L105)

* [`shareable.init.js` - line 149 → 153](https://github.com/ksxatompackages/quick-spawn/blob/latest/examples/shareable.init.js#L149-L153)

* [`shareable.init.js` - line 174 → 177](https://github.com/ksxatompackages/quick-spawn/blob/latest/examples/shareable.init.js#L174-L177)

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/deprecated.svg
[required]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/required.svg
[optional]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/optional.svg
