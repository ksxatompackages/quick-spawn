# `SingleSubscriptionDescriptor` ![stable]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Structures](.) → [`SingleSubscriptionDescriptor`](./single-subscription-descriptor.md)

## Overview

Pass this as the first argument to function <code>[APIRootObject](./classes/api.md)::registerSpawnCommand</code>.

## Basic Attributes

* Super: None ![stable]

* Template:
  - [AtomCommandSubscriptionDescriptor](./atom-command-subscription-descriptor.md)
  - [SpawnSubscriptionDescriptor](./spawn-subscription-descriptor.md)

## Properties

### Exit On Close ![experimental]

**Attributes**

* Name: `exitOnClose` ![stable]

* Type: `boolean` ![stable]

* ![optional] ![stable]
  - Default to `true` ![experimental]

**Description**

If `true`, spawned process will exit when user closes its view

### Close On Exit ![experimental]

**Attributes**

* Name: `closeOnExit` ![stable]

* Type: `boolean` ![stable]

* ![optional] ![stable]
  - Default to `false`

**Description**

If `true`, view will be closed when spawned process ends

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/deprecated.svg
[required]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/required.svg
[optional]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/optional.svg
