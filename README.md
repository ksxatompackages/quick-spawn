# quick-spawn
[![Build Status](https://travis-ci.org/ksxatompackages/quick-spawn.svg?branch=master)](https://travis-ci.org/ksxatompackages/quick-spawn)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![dependencies status](https://david-dm.org/ksxatompackages/quick-spawn.svg)](https://david-dm.org/ksxatompackages/quick-spawn#info=dependencies)
[![devDependencies status](https://david-dm.org/ksxatompackages/quick-spawn/dev-status.svg)](https://david-dm.org/ksxatompackages/quick-spawn#info=devDependencies)
[![license](https://img.shields.io/npm/l/promise-set.svg)](http://spdx.org/licenses/MIT)

## Under Development

Contributions are welcome.

## Requirements

* Atom ≥ 1.10.0

## Installation

```bash
apm install quick-spawn
```

## Usage

**DISCLAIMER:** This package is designed to provide a powerful and stable *APIs* and *DOM UI*, so you can create simple iteractive *terminal* by *hacking* Atom. The mean point of this package is *not* the [basic one](#basic-use) *but* the [advanced one](#advanced-use). For this reason, we do not intend to provide full features for basic usage, our intention mainly focus in advanced user experience.

### Basic Use

Basic use is a behaviour that is turned on by default, you can tweak it in Settings (Shortcut: <kbd>Ctrl+,</kbd>) or by editing `config.cson` (Command Palette: `Application: Open Your Config`). If you feel you need more, go check [advanced](#advanced-use).

#### Tweak in Settings

> You can't do much in Settings, to do more, checkout [`config.cson`](#tweak-by-opening-configcson).

 * **Basic Use: Enabled** *(Checkbox)*: Whether basic feature is enabled, default to on.

 * **Basic Use: Executable Path** *(Text Input)*: Which program will be executed if you command, default to `bash` (Checkout [MSYS2](https://msys2.github.io/) or just install [Git](https://git-scm.com/) to get bash for Windows).

 * **Basic Use: Working Directory** *(Select List)*: Either `activated-project-directory`, `activated-file-container`, or `executable-container`. Default to `activated-project-directory`.

 * **Basic Use: Hide Stdin** *(Checkbox)*: Whether typed input should be hidden, default to on.

 * **Basic Use: Hide Stdout** *(Checkbox)*: Whether stdout data should be hidden, default to on.

 * **Basic Use: Hide StdErr** *(Checkbox)*: Whether stderr data should be hidden, default to on.

 * **Basic Use: Service Type** *(Select List)*: Either `temporary`, `background` or `suspended-background`. Default to `temporary`.

 * **Basic Use: UI Type** *(Select List)*: Either `tab`, `panel`, `dialog`, `hidden` or `detached`. Default to `tab`.

 * **Basic Use: Detached Text Box** *(Select List)*: Either `none`, `mini-editor`, `editor`, `tab`. Default to `none`.

 * **Basic Use: Atom Command** *(Text Input)*: Register a command that is callable from Command-Palette, default to `quick-spawn:basic-use`, which would be shown to you as `Quick Spawn: Basic Use`.

 * **Basic Use: Keybinding** *(Text Input)*: Register a Keyboard Shortcut for Basic Use.

#### Tweak by Opening `config.cson`

> See also: http://flight-manual.atom.io/using-atom/sections/basic-customization/

##### 1. The following fields are tweakable [by opening Settings](#tweak-in-settings), so let move on!

 * `basic-use:enabled` (boolean)

 * `basic-use:executable-path` (string)

 * `basic-use:working-directory` (string enum)

 * `basic-use:hide-stdin` (boolean)

 * `basic-use:hide-stdout` (boolean)

 * `basic-use:hide-stderr` (boolean)

 * `basic-use:service-type` (string enum)

 * `basic-use:ui-type` (string enum)

 * `basic-use:detached-text-box` (string enum)

 * `basic-use:atom-command` (string)

 * `basic-use:keybinding` (string)

##### 2. The following fields are little more advanced

 * `basic-use:command-line-arguments` (array of string)
  - List of arguments which is passed when spawn the process

 * `basic-use:io-file` (object)
  - Key: `stdin`, `stdout`, and `stderr`
  - Value: A valid file path

 * `basic-use:io-pipe` (object)
  - Key: `stdin`, `stdout`, and `stderr`
  - Value: A valid path to an executable file

 * `global:environment-variable` (object)
  - Key: Variable name
  - Value: Variable value. Either a *string*; or an *object* (called *descriptor*) which contains `middle` (optional string array property - if undefined, use Atom's environment variable with the same name), `before` (optional string array property), `after` (optional string array property), and `delemiter` (optional character property, default to `:`).

### Advanced Use

#### Prerequisite

The following section is filled with full of JavaScript, so in order to understand the tutorial, you better know JavaScript. However, if you don't know JavaScript yet, don't worry, you can still exploit some of its advantages, just copy-paste it (see [below](#overview)).

#### Overview

This package provides a strong JavaScript *APIs* and customizable *UI* for user to create a simple console (a.k.a. shell, terminal) by [hacking Atom](http://flight-manual.atom.io/hacking-atom/).

In a nutshell, hacking Atom is any of the following:
 * Modifying [**your** Atom's Init File](http://flight-manual.atom.io/hacking-atom/sections/the-init-file/) (i.e. `init.coffee` or `init.js`)
 * Creating an [Atom package](http://flight-manual.atom.io/using-atom/sections/atom-packages/). <i>**P.S.** We always thank whoever try to create a plugin for this package.</i>
 * Open Atom's DevTools (It's actually Google Chrome's DevTools) and have fun with some JavaScript commands.

All code snippets of the following tutorials are writen in JavaScript to make it easy for non-Coffee JavaScript users. It won't be such a pain for Coffee enthusiasts because they must know JavaScript as well as their flavour. But it might be somehow difficult for non-JS users, so please do one of the following if you just want a copy-paste:
 * Remove `init.coffee`, create an empty `init.js`, then write things in it.
 * Create a `whatever.js` file to write things in, then add `require 'whatever.js'` to your `init.coffee`.
 * Create a simple Atom package in JavaScript so you can paste any JS code in.

#### Examples

##### Prerequisite: Import the Package as a NodeJS module

```javascript
const quickSpawnAPIs = global.atom.packages.getLoadedPackage('quick-spawn').api
```

##### Simple Resigtration

Register exactly one atom-command for exactly one spawn-subscription

[Get full example `init.js`](https://github.com/ksxatompackages/quick-spawn/latest/examples/simple.init.js)

```javascript
quickSpawnAPIs.registerSingleSubscription({
  execCmd: 'bash',
  workingDirectory: global.atom.workspace.getActivePaneItem().getDirectoryPath(),
  attached: false,
  suspended: true,
  viewStdIO: ['stdin', 'stdout', 'stderr'],
  atomCmd: 'quick-spawn-advanced:bash-simple',
  atomKeybinding: 'ctrl-shift-b a',
  type: 'tab',
  exitOnClose: true,
  closeOnExit: true
})
```

##### Shareable Resigtration

Register multiple atom-commands with different configurations with one shared spawn-subscription

[Get full example `init.js`](https://github.com/ksxatompackages/quick-spawn/latest/examples/shareable.init.js)

```javascript
quickSpawnAPIs
  .registerSpawnCommand({
    execCmd: 'bash',
    workingDirectory: global.atom.workspace.getActivePaneItem().getDirectoryPath(),
    attached: false,
    suspended: true
  })
  .registerAtomCommand({
    viewStdIO: ['stdin', 'stdout', 'stderr'],
    atomCmd: 'quick-spawn-advanced:bash-shareable',
    atomKeybinding: 'ctrl-shift-b b',
    type: 'tab',
    oncreated: view => {
      const spawnSubscription = view.getSpawnSubscription()
      view.on('show', () => console.log('show', view))
      view.on('hide', () => console.log('hide', view))
      view.on('hide', () => spawnSubscription.destroy())
      view.on('destroy', () => console.log('destroy', view))
      spawnSubscription.on('exit', code => {
        console.log(`${spawnSubscription.execCommand} exited with code ${code}`)
        view.destroy() // optional though
      })
    }
  })
```

#### Documentation

[latest](https://github.com/ksxatompackages/quick-spawn/tree/latest/docs)

[v0.0.1](https://github.com/ksxatompackages/quick-spawn/tree/v0.0.1/docs)

## License

[MIT](https://github.com/ksxatompackages/quick-spawn/blob/master/LICENSE.md)
