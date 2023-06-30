# Typed Github actions

Write github workflows using `@actions/github-script` without headaches.

*You can use this project as a template if your too lazy to do the installation steps manually.*


Jump to configuration files:
- [Typed Github actions](#typed-github-actions)
    - [Installation](#installation)
      - [Configuration ci-workflow.yaml](#configuration-ci-workflowyaml)
      - [Configuration ci-example.mjs](#configuration-ci-examplemjs)
      - [Example file structure:](#example-file-structure)
  - [Alternative setup](#alternative-setup)
      - [Configuration package.json](#configuration-packagejson)
      - [Configuration tsconfig.json](#configuration-tsconfigjson)
      - [Configuration ci-workflow.yaml](#configuration-ci-workflowyaml-1)



### Installation
```sh
$ npm install -D @typed-actions/github-script
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
      - uses: typed-actions/github-script
          with:
            github-token: ${{ secrets.GITHUB_TOKEN }}
            result-encoding: string
            script: actions/ci-example.mjs
```

#### Configuration ci-example.mjs
```ts
// @ts-check
/** @param {import('@typed-actions/github-script').Toolkit} Toolkit */
export default async ({ core, context }) => {
  core.debug("Running something at the moment");
  return context.actor;
};
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


__________________________


## Alternative setup


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