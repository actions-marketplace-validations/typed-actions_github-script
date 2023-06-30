export const __esModule: boolean;
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
export function issueCommand(command: any, properties: any, message: any): void;
export function issue(name: any, message?: string): void;
