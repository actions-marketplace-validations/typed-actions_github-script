export const __esModule: boolean;
export const context: any;
export namespace defaults {
    export { baseUrl };
    export namespace request {
        let agent: any;
    }
}
export const GitHub: typeof core_1.Octokit & import("@octokit/core/dist-types/types").Constructor<import("@octokit/plugin-rest-endpoint-methods/dist-types/types").Api & {
    paginate: plugin_paginate_rest_1.PaginateInterface;
}>;
declare const baseUrl: any;
import core_1 = require("@octokit/core");
import plugin_paginate_rest_1 = require("@octokit/plugin-paginate-rest");
/**
 * Convience function to correctly format Octokit Options to pass into the constructor.
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */
export function getOctokitOptions(token: any, options: any): any;
export {};
