# Table of Contents
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](..) → [API References](.)

## Classes
Models of objects that provide methods and property getters/setters

 * [APIRootObject](./classes/api.md) → Result of expression `require(global.atom.resolvePackagePath('quick-spawn')).api`.

 * [SingleSubscription](./classes/single-subscription.md) → Being returned object when call <code>[APIRootObject](.classes/api.md)::registerSingleSubscription</code>. Manages spawned process as well and registered atom command.

 * [SpawnSubscription](./classes/spawn-subscription.md) → Being returned object when call <code>[APIRootObject](.classes/api.md)::registerSpawnCommand</code>. Observes and Controls spawned process.

 * [AtomCommandSubscription](./classes/atom-command-subscription.md) → Being returned object when call <code>[SpawnSubscription](./classes/spawn-subscription.md)::registerSpawnCommand</code>. Observes and Controls registered atom-command as well as [`SpawnSubscription`](./classes/spawn-subscription.md) object.

## Structures
Models of objects that contain only data-properties

 * [SingleSubscriptionDescriptor](./structures/single-subscription-descriptor.md) → Pass this the first argument to function <code>[APIRootObject](./classes/api.md)::registerSingleSubscription</code>

 * [SpawnSubscriptionDescriptor](./structures/spawn-subscription-descriptor.md) → Pass this the first argument to function <code>[APIRootObject](./classes/api.md)::registerSpawnCommand</code>

 * [AtomCommandSubscriptionDescriptor](./structures/atom-command-subscription-descriptor.md) → Pass this the first argument to function <code>[SpawnSubscription](./classes/spawn-subscription.md)::registerAtomCommand</code>
