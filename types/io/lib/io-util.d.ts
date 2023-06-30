export const __esModule: boolean;
export const IS_WINDOWS: boolean;
export const UV_FS_O_EXLOCK: 268435456;
export function exists(fsPath: any): any;
export function isDirectory(fsPath: any, useStat?: boolean): any;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
export function isRooted(p: any): any;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
export function tryGetExecutablePath(filePath: any, extensions: any): any;
export function getCmdPath(): string;
