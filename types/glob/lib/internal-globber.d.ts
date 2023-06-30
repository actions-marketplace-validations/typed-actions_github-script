export const __esModule: boolean;
export class DefaultGlobber {
    /**
     * Constructs a DefaultGlobber
     */
    static create(patterns: any, options: any): any;
    static stat(item: any, options: any, traversalChain: any): any;
    constructor(options: any);
    patterns: any[];
    searchPaths: any[];
    options: any;
    getSearchPaths(): any[];
    glob(): any;
    globGenerator(...args: any[]): any;
}
