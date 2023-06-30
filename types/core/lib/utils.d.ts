export const __esModule: boolean;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
export function toCommandValue(input: any): string | String;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
export function toCommandProperties(annotationProperties: any): {
    title?: undefined;
    file?: undefined;
    line?: undefined;
    endLine?: undefined;
    col?: undefined;
    endColumn?: undefined;
} | {
    title: any;
    file: any;
    line: any;
    endLine: any;
    col: any;
    endColumn: any;
};
