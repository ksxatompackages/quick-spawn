# Table of Contents ![exprimental]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Templates](.) → [EventListenerSubscription](./event-listener-subscription.md)

## Overview

Functions to add/remove event-listeners

## Basic Attributes

 * Template:
  - [EventEmitter](./event-emitter)

## Functions and Methods

### Dispose

**Attributes**

 * Name: `dispose`

 * Position:
  - Instance

 * Independs from `this`

 * Return: None

 * Parameters: None

**Description**

 * Unregister the event-subscription

## Properties

### Instance

**Attributes**

 * Name: `instance`

 * Configuration:
  - Readable
  - Unwritable

 * Return:
  - [`EventEmitter`](./event-emitter.md)

**Description**

 * Returns the event-emitter that 'this' subscription bound to

### Disposed

**Attributes**

 * Name: `disposed`

 * Configuration:
  - Readable
  - Unwritable

 * Return:
  - `boolean`

**Description**

 * Being `true` when the subscription get disposed
