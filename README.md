# hc-boilerplate
honeycomb seed project.

## how to add a new boilerplate

This repository use subtree to manage boilerplates.

add

```sh
git subtree add --prefix=<prefix> repostry ref --squash
```

update

```sh
git subtree pull --prefix=<prefix> repostry ref
```

## boilerplates

| Name                                     | Description                              | Usage                                    |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [hc-boilerplate-simple](https://github.com/node-honeycomb/hc-boilerplate/tree/simple) | [hc-bee](https://github.com/node-honeycomb/hc-bee) seed project. | [honeycomb](https://github.com/node-honeycomb/honeycomb-cli) init -t simple |

