export const __esModule: boolean;
export const ExitCode: {};
export const summary: {
    _buffer: any;
    _filePath?: any;
    filePath: any;
    wrap: any;
    write(options?: summary_1.SummaryWriteOptions): Promise<any>;
    clear(): Promise<any>;
    stringify(): string; /**
     * A code indicating that the action was a failure
     */
    isEmptyBuffer(): boolean;
    emptyBuffer(): any;
    addRaw(text: string, addEOL?: boolean): any;
    addEOL(): any;
    addCodeBlock(code: string, lang?: string): any;
    addList(items: string[], ordered?: boolean): any;
    addTable(rows: summary_1.SummaryTableRow[]): any;
    addDetails(label: string, content: string): any;
    addImage(src: string, alt: string, options?: summary_1.SummaryImageOptions): any;
    addHeading(text: string, level?: string | number): any;
    addSeparator(): any;
    addBreak(): any;
    addQuote(text: string, cite?: string): any;
    addLink(text: string, href: string): any;
};
export const markdownSummary: {
    _buffer: any;
    _filePath?: any;
    filePath: any;
    wrap: any;
    write(options?: summary_1.SummaryWriteOptions): Promise<any>;
    clear(): Promise<any>;
    stringify(): string; /**
     * A code indicating that the action was a failure
     */
    isEmptyBuffer(): boolean;
    emptyBuffer(): any;
    addRaw(text: string, addEOL?: boolean): any;
    addEOL(): any;
    addCodeBlock(code: string, lang?: string): any;
    addList(items: string[], ordered?: boolean): any;
    addTable(rows: summary_1.SummaryTableRow[]): any;
    addDetails(label: string, content: string): any;
    addImage(src: string, alt: string, options?: summary_1.SummaryImageOptions): any;
    addHeading(text: string, level?: string | number): any;
    addSeparator(): any;
    addBreak(): any;
    addQuote(text: string, cite?: string): any;
    addLink(text: string, href: string): any;
};
export const toPosixPath: typeof path_utils_1.toPosixPath;
export const toWin32Path: typeof path_utils_1.toWin32Path;
export const toPlatformPath: typeof path_utils_1.toPlatformPath;
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
export function exportVariable(name: any, val: any): void;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
export function setSecret(secret: any): void;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
export function addPath(inputPath: any): void;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
export function getInput(name: any, options: any): string;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
export function getMultilineInput(name: any, options: any): string[];
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
export function getBooleanInput(name: any, options: any): boolean;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
export function setOutput(name: any, value: any): void;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
export function setCommandEcho(enabled: any): void;
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
export function setFailed(message: any): void;
/**
 * Gets whether Actions Step Debug is on or not
 */
export function isDebug(): boolean;
/**
 * Writes debug message to user log
 * @param message debug message
 */
export function debug(message: any): void;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
export function error(message: any, properties?: {}): void;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
export function warning(message: any, properties?: {}): void;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
export function notice(message: any, properties?: {}): void;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
export function info(message: any): void;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
export function startGroup(name: any): void;
/**
 * End an output group.
 */
export function endGroup(): void;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
export function group(name: any, fn: any): any;
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
export function saveState(name: any, value: any): void;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
export function getState(name: any): string;
export function getIDToken(aud: any): any;
import summary_1 = require("./summary");
import path_utils_1 = require("./path-utils");
