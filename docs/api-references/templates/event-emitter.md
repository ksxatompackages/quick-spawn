# Table of Contents ![experimental]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Templates](.) → [EventEmitter](./event-emitter.md)

## Overview

Functions to add/remove event-listeners

## Basic Attributes

 * Template: None ![stable]

## Functions and Methods

### Register Event Listener

**Attributes**

 * Name: `on` ![stable]

 * Position:
  - Instance ![stable]

 * Depends on `this`

 * Return:
  - [`EventListenerSubscription`](./event-listener-subscription.md)

 * Parameters:
  - `string name` (required) ![stable]
  - `function handle` (required) ![stable]

**Description**

 * Register an event-listener

 * Create and Return a subscription that can deliver its own event to the original emitter and be disposed

### Register Event Listener (Once)

**Attributes**

 * Name: `once` ![stable]

 * Position:
  - Instance ![stable]

 * Depends on `this` ![experimental]

 * Return:
  - [`EventListenerSubscription`](./event-listener-subscription.md)

 * Parameters:
  - `string name` (required) ![stable]
  - `function handle` (required) ![stable]

 **Description**

  * Register an event-listener

  * Create and Return a subscription that can deliver its own event to the original emitter and be disposed

  * Once event is fired, the subscription automatically get disposed

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/deprecated.svg
