# `SpawnSubscriptionDescriptor` ![stable]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Structures](.) → [`SpawnSubscriptionDescriptor`](./spawn-subscription-descriptor.md)

## Overview

Pass this as the first argument to function <code>[APIRootObject](./classes/api.md)::registerSpawnCommand</code>.

## Properties

### Executing Command ![stable]

**Attributes**

* Name: `execCmd` ![stable]

* Type: [`CommandDefiner`](./command-definer.md#commanddefiner-) ![stable]

* ![required] ![stable]

**Description**

Define path to executable (binary)

### Executing Arguments ![stable]

**Attributes**

* Name: `execArguments` ![stable]

* Type: <code>Array&lt;[CommandDefiner](./command-definer.md#commanddefiner-)&gt;</code> ![stable]

* ![optional] ![stable]
  - Default to `[]` ![stable]

**Description**

Defines arguments will be passed

### Working Directory ![stable]

**Attributes**

* Name: `workingDirectory` ![stable]

* Type: [`CommandDefiner`](./command-definer.md#commanddefiner-) ![stable]

* ![optional] ![stable]
  - Default to `$HOME` ![stable]

**Description**

Defines a working directory for command to execute

### Attached ![stable]

**Attributes**

* Name: `attached` ![stable]

* Type: `boolean`

* ![optional] ![stable]
  - Default to `false` ![stable]

**Description**

Whether spawned child process should be attached to atom process

### Suspended ![stable]

**Attributes**

* Name: `suspended` ![stable]

* Type: `boolean`

* ![optional] ![stable]
  - Default to `true`

**Description**

If `true`, command would not be spawned until user invoke its atom-command

If `false`, command would be spawn follow atom startup
[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/deprecated.svg
[required]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/required.svg
[optional]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/optional.svg
