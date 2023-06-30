export const __esModule: boolean;
declare const ToolRunner_base: any;
export class ToolRunner extends ToolRunner_base {
    [x: string]: any;
    constructor(toolPath: any, args: any, options: any);
    toolPath: any;
    args: any;
    options: any;
    _debug(message: any): void;
    _getCommandString(options: any, noPrefix: any): string;
    _processLineBuffer(data: any, strBuffer: any, onLine: any): any;
    _getSpawnFileName(): any;
    _getSpawnArgs(options: any): any;
    _endsWith(str: any, end: any): any;
    _isCmdFile(): any;
    _windowsQuoteCmdArg(arg: any): any;
    _uvQuoteCmdArg(arg: any): any;
    _cloneExecOptions(options: any): {
        cwd: any;
        env: any;
        silent: any;
        windowsVerbatimArguments: any;
        failOnStdErr: any;
        ignoreReturnCode: any;
        delay: any;
    };
    _getSpawnOptions(options: any, toolPath: any): {
        cwd: any;
        env: any;
        windowsVerbatimArguments: any;
        argv0: string;
    };
    /**
     * Exec a tool.
     * Output will be streamed to the live console.
     * Returns promise with return code
     *
     * @param     tool     path to tool to exec
     * @param     options  optional exec options.  See ExecOptions
     * @returns   number
     */
    exec(): any;
}
/**
 * Convert an arg string to an array of args. Handles escaping
 *
 * @param    argString   string of arguments
 * @returns  string[]    array of arguments
 */
export function argStringToArray(argString: any): string[];
export {};
