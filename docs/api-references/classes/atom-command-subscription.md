# Table of Contents ![stable]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Classes](.) → [`AtomCommandSubscription`](./atom-command-subscription.md)

## Overview

Being returned object when call <code>[APIRootObject](.classes/api.md)::registerSingleSubscription</code>. Manages spawned process as well and registered atom command.

## Basic Attributes

* Super: None ![experimental]

* Template:
  - [`EventEmitter`](../templates/event-emitter.md) ![experimental]
  - [`Disposable`](../templates/disposable.md) ![stable]
  - [`ObjectDelegate`](../templates/object-delegate.md) ![stable]

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

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/deprecated.svg
