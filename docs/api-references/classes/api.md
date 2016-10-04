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
