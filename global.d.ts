export type Toolkit = globalThis.Toolkit
declare global {
  type Toolkit = {
    github: InstanceType<typeof import('./types/github/lib/utils.d.ts').GitHub>
    context: import('./types/github/lib/context.d.ts').Context
    core: typeof import('./types/core/lib/core.d.ts')
    exec: typeof import('./types/exec/lib/exec.d.ts')
    glob: typeof import('./types/glob/lib/glob.d.ts')
    io: typeof import('./types/io/lib/io.d.ts')
    fetch: typeof import('node-fetch')
    __original_require__: NodeRequire
  };
}


