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

> You can do not much in Settings, to do more, checkout [`config.cson`](#tweak-by-opening-configcson).

 * **Basic Use: Enabled** (Checkbox): Whether basic feature is enabled.

 * **Basic Use: Executable Path** (Text Input): Which program will be executed if you command, default to `bash` (Checkout [MSYS2](https://msys2.github.io/) to use bash on Windows).

 * **Basic Use: Atom Command** (Text Input): Register a command that is callable from Command-Palette, default to `quick-spawn:basic-use`, which would be shown to you as `Quick Spawn: Basic Use`.

 * **Basic Use: Keybinding** (Text Input): Register a Keyboard Shortcut for Basic Use.

#### Tweak by Opening `config.cson`

> See also: http://flight-manual.atom.io/using-atom/sections/basic-customization/

##### 1. The following fields are tweakable [by opening Settings](#tweak-in-settings), so let move on!

 * `basic-use:enabled` (boolean)

 * `basic-use:executable-path` (string)

 * `basic-use:atom-command` (string)

 * `basic-use:keybinding` (string)

##### 2. The following fields are little more advanced

 * `global:environment-variable` (object)
  - Key: Variable name
  - Value: Variable value. Either a *string*; or an *object* (called *descriptor*) which contains `middle` (optional string array property - if undefined, use Atom's environment variable with the same name), `before` (optional string array property), `after` (optional string array property), and `delemiter` (optional character property, default to `:`).

 * `global:io-file` (object)
  - Key: `stdin`, `stdout`, and `stderr`
  - Value: A valid file path

 * `global:io-pipe` (object)
  - Key: `stdin`, `stdout`, and `stderr`
  - Value: A valid path to an executable file

### Advanced Use

#### Prerequisite

The following section is filled with full of JavaScript, so in order to acquire the tutorial, you better know JavaScript. However, if you don't know JavaScript yet, don't worry, you can still exploit some of its advantages, just copy-paste it (see [below](#overview)).

#### Overview

This package provides a strong JavaScript *APIs* and customizable *UI* for user to create a simple console (a.k.a. shell, terminal) by [hacking Atom](http://flight-manual.atom.io/hacking-atom/).

In a nutshell, hacking Atom is any of the following:
 * Modifying [**your** Atom's Init File](http://flight-manual.atom.io/hacking-atom/sections/the-init-file/) (i.e. `init.coffee` or `init.js`)
 * Creating an [Atom package](http://flight-manual.atom.io/using-atom/sections/atom-packages/). <i>**P.S.** We always thank whoever try to create a plugin for this package.</i>
 * Open Atom's DevTools (It's actually Google Chrome's DevTools) and have fun with some JavaScript commands.

All code snippets of the following tutorials are writen in JavaScript to make it easy for non-Coffee JavaScript developers. It won't be such a pain for Coffee enthusiasts because they must know JavaScript as well as their flavour. But I might be somehow difficult for non-JS developers, so please do one of the following if you just want a copy-paste:
 * Remove `init.coffee`, create an empty `init.js`, then write things in it.
 * Create a `whatever.js` file to write things in, then add `require 'whatever.js'` to your `init.coffee`.
 * Create a simple Atom package in JavaScript so you can paste any JS code in.

#### Examples

*TODO: Content goes here*

#### API References

*TODO: Link goes here*

## License

[MIT](https://github.com/ksxatompackages/quick-spawn/blob/master/LICENSE.md)
