export const __esModule: boolean;
export class Pattern {
    /**
     * Escapes glob patterns within a path
     */
    static globEscape(s: any): any;
    /**
     * Normalizes slashes and ensures absolute root
     */
    static fixupPattern(pattern: any, homedir: any): any;
    /**
     * Attempts to unescape a pattern segment to create a literal path segment.
     * Otherwise returns empty string.
     */
    static getLiteral(segment: any): string;
    /**
     * Escapes regexp special characters
     * https://javascript.info/regexp-escaping
     */
    static regExpEscape(s: any): any;
    constructor(patternOrNegate: any, isImplicitPattern: boolean, segments: any, homedir: any);
    /**
     * Indicates whether matches should be excluded from the result set
     */
    negate: boolean;
    segments: string[];
    trailingSeparator: any;
    searchPath: string;
    rootRegExp: RegExp;
    isImplicitPattern: boolean;
    minimatch: any;
    /**
     * Matches the pattern against the specified path
     */
    match(itemPath: any): internal_match_kind_1.MatchKind.None | internal_match_kind_1.MatchKind.Directory | internal_match_kind_1.MatchKind.All;
    /**
     * Indicates whether the pattern may match descendants of the specified path
     */
    partialMatch(itemPath: any): any;
}
import internal_match_kind_1 = require("./internal-match-kind");
