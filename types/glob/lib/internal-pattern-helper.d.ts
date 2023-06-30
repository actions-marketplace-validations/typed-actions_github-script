export const __esModule: boolean;
/**
 * Given an array of patterns, returns an array of paths to search.
 * Duplicates and paths under other included paths are filtered out.
 */
export function getSearchPaths(patterns: any): any[];
/**
 * Matches the patterns against the path
 */
export function match(patterns: any, itemPath: any): internal_match_kind_1.MatchKind;
/**
 * Checks whether to descend further into the directory
 */
export function partialMatch(patterns: any, itemPath: any): any;
import internal_match_kind_1 = require("./internal-match-kind");
