# `AtomCommandSubscriptionDescriptor` ![stable]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Structures](.) → [`AtomCommandSubscriptionDescriptor`](./atom-command-subscription-descriptor.md)

## Overview

Pass this as the first argument to function <code>[SpawnSubscription](./classes/spawn-subscription.md)::registerAtomCommand</code>.

## Properties

### Atom Command ![stable]

**Attributes**

* Name: `atomCmd` ![stable]

* Type: [`CommandDefiner`](./command-definer.md#commanddefiner-)

* ![required] ![stable]

**Description**

Determine atom-command to register

### Atom Target Selector ![stable]

**Attributes**

* Name: `atomTarget` ![stable]

* Type: `string` (CSS Selector) ![stable]

* ![required] ![stable]

**Description**

Specify target elements selector

### View Type ![stable]

**Attributes**

* Name: `type` ![stable]

* Type: `enum string { 'tab', 'panel', 'dialog', 'hidden' }` ![stable]

* ![optional] ![stable]
  - Default to `'tab'`

**Description**

Determine view element model

### View Standard I/O ![stable]

**Attributes**

* Name: `viewStdIO` ![stable]

* Type: `SetArray<StdIOString>` ![stable]
  - `typedef enum string { 'stdin',  'stdout', 'stderr' } StdIOString`

* ![optional] ![stable]
  - Default to `['stdin', 'stdout', 'stderr']`

**Description**

Whether stdin, stdout, and/or stderr will be displayed in view

### Atom Keybinding ![stable]

**Attributes**

* Name: `atomKeybinding` ![stable]

* Type: `Keybinding`
  - `typedef variant<string, Array<Keybinding>> Keybinding`
  - `string` satifies Atom Keystroke syntax
  - `Array` must not be circular
    - Otherwise there would be infinite iteration/recursion, so don't even try making it circular

* ![optional] ![stable]

**Description**

If not empty, register keybinding for the atom-command

### Atom Menubar Path ![stable]

**Attributes**

* Name: `atomMenuBar` ![stable]

* Type: `Array<string>` ![stable]

* ![optional] ![stable]

**Description**

If provided
  - Register menu entries for the atom-command follow path
  - Each item is a submenu of a menu entry by an item right before it

### Atom Context Menu Descriptor ![stable]

**Attributes**

* Name: `atomContextMenu` ![stable]

* Type: `Object` ![stable]
  - `string target` (CSS Selector)
  - `Array<string> path`

* ![optional] ![stable]

**Description**

As similar to [menubar one](#atom-menubar-path-) but for context-menu

### Detached Text Box (Style) ![stable]

**Attributes**

* Name: `detachedTextBox` ![stable]

* Type: `enum string` ![stable]
  - `none`
  - `hidden`
  - `mini-editor`
  - `editor`
  - `editor-tab`

* ![optional] ![stable]
  - Default to `none`

**Description**

Case `none`, no detached text box, instead, a text box (as a mini-atom-editor) will be attached to view itself

Case `hidden`, neither a detached text box nor an attached text box will be shown

Case `mini-editor`, show mini-atom-editor

Case `editor`, show an atom-editor

Case `editor-tab`, open new tab, with an atom-editor

### After Creation Handler ![stable]

**Attributes**

* Name: `oncreated`

* Type: `function`
  - Arguments: <code>[viewSubscription](../classes/view-subscription.md) viewSubscription</code>
  - Returns: `void`

* ![optional] ![stable]

**Description**

Function will be call upon subscription

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/deprecated.svg
[required]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/required.svg
[optional]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/optional.svg
