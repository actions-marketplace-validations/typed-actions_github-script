export const __esModule: boolean;
/**
 * Constructs a globber
 *
 * @param patterns  Patterns separated by newlines
 * @param options   Glob options
 */
export function create(patterns: any, options: any): any;
/**
 * Computes the sha256 hash of a glob
 *
 * @param patterns  Patterns separated by newlines
 * @param currentWorkspace  Workspace used when matching files
 * @param options   Glob options
 * @param verbose   Enables verbose logging
 */
export function hashFiles(patterns: any, currentWorkspace: string, options: any, verbose?: boolean): any;
