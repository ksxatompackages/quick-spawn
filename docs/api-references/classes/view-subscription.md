# `ViewSubscription` ![stable]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Classes](.) → [`ViewSubscription`](./view-subscription.md)

## Overview

Being returned object when call <code>[AtomCommandSubscription](./atom-command-subscription.md)::getCurrentView()</code>. Manages View HTML Element which is attached to atom-workspace

## Basic Attributes

* Super: None ![experimental]

* Template:
  - [`EventEmitter`](../templates/event-emitter.md) ![experimental]
  - [`Disposable`](../templates/disposable.md) ![stable]
  - [`ObjectDelegate`](../templates/object-delegate.md) ![stable]

## Events

### Show ![stable]

**Attributes**

* Name: `show`

* Parameters
  - `Object param` ![experimental]
    - <code>[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) targetElement</code> ![experimental]
    - `AtomCommandSubscription subscription` ![experimental]

### Hide ![stable]

**Attributes**

* Name: `hide` ![stable]

* Parameters
  - `Object param` ![stable]
    - <code>[ViewSubscription](./view-subscription.md) viewSubscription</code> ![stable]
    - <code>[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) targetElement</code> ![experimental]
    - `AtomCommandSubscription subscription` ![experimental]

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/deprecated.svg
