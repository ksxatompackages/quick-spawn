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
    - Returns: `CommandDefiner` ![stable]

[fixed]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/fixed.svg
[stable]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/stable.svg
[experimental]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/experimental.svg
[deprecated]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/deprecated.svg
[required]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/required.svg
[optional]: https://cdn.rawgit.com/ksxatompackages/quick-spawn/images-v0.2.0/docs/images/badges/optional.svg
