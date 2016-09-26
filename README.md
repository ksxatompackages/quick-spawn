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

### Basic Use

Basic use is a behaviour that is turned on by default, you can tweak it in Settings (Shortcut: <kbd>Ctrl+,</kbd>) or by editing `config.cson` (Command Palette: `Application: Open Your Config`). If you feel you need more, go check [advanced](#advanced-use).

#### Tweak in Settings

> You can do not much in Settings, to do more, checkout [`config.cson`](#tweak-by-opening-configcson).

 * **Basic Use: Enabled** (Checkbox): Whether basic feature is enabled.

 * **Basic Use: Executable Path** (Text Input): Which program will be executed if you command, default to `bash` (Checkout [MSYS2](https://msys2.github.io/) to use bash on Windows).

 * **Basic Use: Atom Command** (Text Input): Register a command that is callable from Command-Palette, default to `quick-spawn:basic-use`, which would be shown to you as `Quick Spawn: Basic Use`.

 * **Basic Use: Keybinding** (Text Input): Register a Keyboard Shortcut for Basic Use.

#### Tweak by Opening `config.cson`

##### 1. The following fields are tweakable [by opening Settings](#tweak-in-settings), so let move on!

 * `basic-use:enabled` (boolean)
 * `basic-use:executable-path` (string)
 * `basic-use:atom-command` (string)
 * `basic-use:keybinding` (string)

##### 2. The following fields are little more advanced

 * `global:single-environment-variable` (object)
  - Key: Variable name
  - Value: Variable value as string
 * `global:array-environment-variable` (object)
  - Key: Variable name
  - Value: Variable value descriptor object which contains `middle` (optional string array - if undefined, use Atom's environment variable with the same name), `before` (optional string array), and `after` (optional string array).
 * `global:io-file` (object)
  - Key: `stdin`, `stdout`, and `stderr`
  - Value: A valid file path
 * `global:io-pipe` (object)
  - Key: `stdin`, `stdout`, and `stderr`
  - Value: A valid path to an executable file

## License

[MIT](https://github.com/ksxatompackages/quick-spawn/blob/master/LICENSE.md)
