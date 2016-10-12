# Table of Contents
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](..) → [API References](.)

## Classes
Models of objects that provide methods and property getters/setters

* [APIRootObject](./classes/api.md) → Result of expression `require(global.atom.resolvePackagePath('quick-spawn')).api`.

* [SingleSubscription](./classes/single-subscription.md) → Being returned object when call <code>[APIRootObject](.classes/api.md)::registerSingleSubscription</code>. Manages spawned process as well and registered atom command.

* [SpawnSubscription](./classes/spawn-subscription.md) → Being returned object when call <code>[APIRootObject](.classes/api.md)::registerSpawnCommand</code>. Observes and Controls spawned process.

* [AtomCommandSubscription](./classes/atom-command-subscription.md) → Being returned object when call <code>[SpawnSubscription](./classes/spawn-subscription.md)::registerSpawnCommand</code>. Observes and Controls registered atom-command as well as [`SpawnSubscription`](./classes/spawn-subscription.md) object.

* [ViewSubscription](./classes/view-subscription.md) → Being returned object when call <code>variant&lt;[SingleSubscription](./classes/single-subscription.md), [AtomCommandSubscription](./classes/atom-command-subscription.md)&gt;::getCurrentView</code>. Observers and Controls opened view of a particular process.

## Structures
Models of objects that contain only data-properties

* [SingleSubscriptionDescriptor](./structures/single-subscription-descriptor.md) → Pass this as the first argument to function <code>[APIRootObject](./classes/api.md)::registerSingleSubscription</code>.

* [SpawnSubscriptionDescriptor](./structures/spawn-subscription-descriptor.md) → Pass this as the first argument to function <code>[APIRootObject](./classes/api.md)::registerSpawnCommand</code>.

* [AtomCommandSubscriptionDescriptor](./structures/atom-command-subscription-descriptor.md) → Pass this as the first argument to function <code>[SpawnSubscription](./classes/spawn-subscription.md)::registerAtomCommand</code>.

## Templates
Object models that provide properties to build [Classes](#classes) and [Structures](#structures)

* [EventEmitter](./templates/event-emitter.md) → Functions to add/remove event-listeners.

* [EventListenerSubscription](./templates/event-listener-subscription.md) → Being returned when make event-listener-registration. Used to remove the registered event-listener and lookup assigned object.

* [Disposable](./templates/disposable.md) → Provide one function `dispose` and one property `disposed`, compatible with [`CompositeDisposable`](https://atom.io/docs/api/v1.11.1/CompositeDisposable).

* [ObjectDelegate](./templates/object-delegate.md) → Provide one lookup property `instance`.

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.1.1/docs/images/badges/deprecated.svg
