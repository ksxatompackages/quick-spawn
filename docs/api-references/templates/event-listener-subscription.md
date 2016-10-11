# Table of Contents ![experimental]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Templates](.) → [EventListenerSubscription](./event-listener-subscription.md)

## Overview

Functions to add/remove event-listeners

## Basic Attributes

 * Template:
  - [EventEmitter](./event-emitter) ![stable]

## Functions and Methods

### Dispose

**Attributes**

 * Name: `dispose` ![stable]

 * Position:
  - Instance ![stable]

 * Independs from `this` ![experimental]

 * Return: None ![experimental]

 * Parameters: None ![stable]

**Description**

 * Unregister the event-subscription

## Properties

### Instance

**Attributes**

 * Name: `instance` ![stable]

 * Configuration:
  - Readable ![fixed]
  - Unwritable ![experimental]

 * Return:
  - [`EventEmitter`](./event-emitter.md) ![stable]

**Description**

 * Returns the event-emitter that 'this' subscription bound to

### Disposed

**Attributes**

 * Name: `disposed` ![stable]

 * Configuration:
  - Readable ![fixed]
  - Unwritable ![experimental]

 * Return:
  - `boolean` ![stable]

**Description**

 * Being `true` when the subscription get disposed

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/deprecated.svg
