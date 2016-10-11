# Table of Contents ![exprimental]
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

 * Independs from `this` ![exprimental]

 * Return: None ![exprimental]

 * Parameters: None ![stable]

**Description**

 * Unregister the event-subscription

## Properties

### Instance

**Attributes**

 * Name: `instance` ![stable]

 * Configuration:
  - Readable ![fixed]
  - Unwritable ![exprimental]

 * Return:
  - [`EventEmitter`](./event-emitter.md) ![stable]

**Description**

 * Returns the event-emitter that 'this' subscription bound to

### Disposed

**Attributes**

 * Name: `disposed` ![stable]

 * Configuration:
  - Readable ![fixed]
  - Unwritable ![exprimental]

 * Return:
  - `boolean` ![stable]

**Description**

 * Being `true` when the subscription get disposed

 [fixed]: https://raw.githubusercontent.com/ksxatompackages/quick-spawn/documentation/docs/images/badges/fixed.svg
 [stable]: https://raw.githubusercontent.com/ksxatompackages/quick-spawn/documentation/docs/images/badges/stable.svg
 [exprimental]: https://raw.githubusercontent.com/ksxatompackages/quick-spawn/documentation/docs/images/badges/exprimental.svg
 [deprecated]: https://raw.githubusercontent.com/ksxatompackages/quick-spawn/documentation/docs/images/badges/deprecated.svg
