# `CommandDefiner` ![experimental]
[Project](https://github.com/ksxatompackages/quick-spawn) → [Documentation](../..) → [API References](..) → [Structures](.) → [`CommandDefiner`](./command-definer.md)

## Overview

Data type of `Descriptor::execCmd`, `Descriptor::workingDirectory` and `Descriptor::execArguments`

## Definition

`CommandDefiner = variant`
  - `string` ![stable]
  - `function` ![stable]
    - Arguments: `object` ![experimental]
      - `Object subscription` ![experimental]
      - `AtomEvent event` ![experimental]
    - Returns: `string` ![stable]

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/deprecated.svg
[required]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/required.svg
[optional]: https://cdn.rawgit.com/ksxatompackages/quick-spawn.images.releases/v0.1.0/src/optional.svg
