# hc-boilerplate
honeycomb seed project.

each branch is a template project:

- [hc-boilerplate-simple](https://github.com/node-honeycomb/hc-boilerplate/tree/simple) in branch simple.

## how to add a new boilerplate

hc-boilerplate use subtree to manage boilerplates.

add

```sh
git subtree add --prefix=<prefix> repostry ref --squash
```

update

```sh
git subtree pull --prefix=<prefix> repostry ref
```

