# Table of Contents
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Classes](.) → [APIRootObject](./api.md)

## Overview

Result of expression `require(global.atom.resolvePackagePath('quick-spawn')).api`.

## register-single-subscription

**Prototype**

 * Name: `registerSingleSubscription`

 * Return:
  - [`SingleSubscription`](./single-subscription.md)

 * Parameters:
  - <code>[SingleSubscriptionDescriptor](../structures/single-subscription-descriptor.md) descriptor</code> (required)

**Description**

 * Registers a spawn-command and an atom-command

 * Creates and Returns a `SingleSubscription` instance to manage registered commands

**Examples**

 * [`simple.init.js` - line 25 → 40](../../../examples/simple.init.js#L25-L40)

 * [`simple.init.js` - line 55 → 67](../../../examples/simple.init.js#L55-L67)

## register-spawn-command

**Prototype**

 * Name: `registerSpawnCommand`

 * Return:
  - [`SpawnSubscription`](./spawn-subscription.md)

 * Parameters:
  - <code>[SpawnSubscriptionDescriptor](../structures/spawn-command-descriptor.md) descriptor</code> (required)

**Description**

 * Register a spawn-command

 * Creates and Returns a `SpawnSubscription` instance to manage registered spawn-command

**Examples**

 * [`shareable.init.js` - line 38 → 45](../../../examples/shareable.init.js#L38-L45)

 * [`shareable.init.js` - line 102 → 105](../../../examples/shareable.init.js#L102-L105)

 * [`shareable.init.js` - line 149 → 153](../../../examples/shareable.init.js#L149-L153)

 * [`shareable.init.js` - line 174 → 177](../../../examples/shareable.init.js#L174-L177)
