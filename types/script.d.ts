export type Toolkit = {
  github: InstanceType<typeof import('./github/lib/utils.js').GitHub>
  context: import('./github/lib/context.js').Context
  core: typeof import('./core/lib/core.js')
  exec: typeof import('./exec/lib/exec.js')
  glob: typeof import('./glob/lib/glob.js')
  io: typeof import('./io/lib/io.js')
  fetch: typeof import('./node-fetch/index.js')
  __original_require__: NodeJS.Require
};



