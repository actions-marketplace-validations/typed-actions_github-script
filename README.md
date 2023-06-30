# Typed Github actions

Write github workflows using `@actions/github-script` without headaches.

*You can use this project as a template if your too lazy to do the installation steps manually.*


Jump to configuration files:
- [Typed Github actions](#typed-github-actions)
    - [Installation](#installation)
      - [Example file structure:](#example-file-structure)
      - [Configuration ci-example.mjs](#configuration-ci-examplemjs)
      - [Configuration package.json](#configuration-packagejson)
      - [Configuration tsconfig.json](#configuration-tsconfigjson)
      - [Configuration global.d.ts](#configuration-globaldts)
      - [Configuration ci-workflow.yaml](#configuration-ci-workflowyaml)
### Installation
```sh
$ npm install -D @actions/github @actions/core @actions/exec @actions/glob @actions/io @types/node-fetch
```

#### Example file structure:
```md
root # Your repository
 ├── .github
 │   ├── ...
 │   └── workflows
 │       └── ci-workflow.yaml
 ├── ...
 └── actions
 │   └── ci-example.mjs 
 ├── global.d.ts
 ├── package.json
 ├── tsconfig.json
```


#### Configuration ci-example.mjs
```ts
// @ts-check
/** @param {Toolkit} Toolkit */
export default async ({ core, context }) => {
  core.debug("Running something at the moment");
  return context.actor;
};
```

#### Configuration package.json
```json
{
  ...
  "type": "module"
  ...
}
```

#### Configuration tsconfig.json
```json
{
  "compilerOptions": {
    ...
  },
  "include": [
    "**/*.mjs",
    "global.d.ts" 
  ]
}
```

#### Configuration global.d.ts
```ts
export {}

declare global {
  type Toolkit = {
    github: InstanceType<typeof import('@actions/github/lib/utils.js').GitHub>
    context: import('@actions/github/lib/context.js').Context
    core: typeof import('@actions/core')
    exec: typeof import('@actions/exec')
    glob: typeof import('@actions/glob')
    io: typeof import('@actions/io')
    fetch: typeof import('node-fetch')
    __original_require__: NodeRequire
  }
}
```

#### Configuration ci-workflow.yaml
```yaml
on: push

permissions:
  pull-requests: read
  contents: read

jobs:
  example:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm ci
      - uses: actions/github-script@v6
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          result-encoding: string
          script: |
            const { default: script } = await import('${{ github.workspace }}/actions/ci-example.mjs');
            return await script({ github, context, core, exec, glob, io, fetch, __original_require__ });
```