# Table of Contents ![experimental]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Templates](.) → [EventEmitter](./event-emitter.md)

## Overview

Functions to add/remove event-listeners

## Basic Attributes

 * Template: None

## Functions and Methods

### Register Event Listener

**Attributes**

 * Name: `on`

 * Position:
  - Instance

 * Depends on `this`

 * Return:
  - [`EventListenerSubscription`](./event-listener-subscription.md)

 * Parameters:
  - `string name` (required)
  - `function handle` (required)

**Description**

 * Register an event-listener

 * Create and Return a subscription that can deliver its own event to the original emitter and be disposed

### Register Event Listener (Once)

**Attributes**

 * Name: `once`

 * Position:
  - Instance

 * Depends on `this`

 * Return:
  - [`EventListenerSubscription`](./event-listener-subscription.md)

 * Parameters:
  - `string name` (required)
  - `function handle` (required)

 **Description**

  * Register an event-listener

  * Create and Return a subscription that can deliver its own event to the original emitter and be disposed

  * Once event is fired, the subscription automatically get disposed

  [fixed]: ../../images/badges/fixed.svg
  [stable]: ../../images/badges/stable.svg
  [experimental]: ../../images/badges/experimental.svg
  [deprecated]: ../../images/badges/deprecated.svg
