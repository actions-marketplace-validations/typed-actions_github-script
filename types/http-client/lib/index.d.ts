export const __esModule: boolean;
export const HttpCodes: {};
export const Headers: {};
export const MediaTypes: {};
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
export function getProxyUrl(serverUrl: any): any;
export class HttpClientError extends Error {
    constructor(message: any, statusCode: any);
    statusCode: any;
}
export class HttpClientResponse {
    constructor(message: any);
    message: any;
    readBody(): any;
}
export function isHttps(requestUrl: any): boolean;
export class HttpClient {
    constructor(userAgent: any, handlers: any, requestOptions: any);
    _ignoreSslError: any;
    _allowRedirects: any;
    _allowRedirectDowngrade: any;
    _maxRedirects: number;
    _allowRetries: any;
    _maxRetries: any;
    _keepAlive: any;
    _disposed: boolean;
    userAgent: any;
    handlers: any;
    requestOptions: any;
    _socketTimeout: any;
    options(requestUrl: any, additionalHeaders: any): any;
    get(requestUrl: any, additionalHeaders: any): any;
    del(requestUrl: any, additionalHeaders: any): any;
    post(requestUrl: any, data: any, additionalHeaders: any): any;
    patch(requestUrl: any, data: any, additionalHeaders: any): any;
    put(requestUrl: any, data: any, additionalHeaders: any): any;
    head(requestUrl: any, additionalHeaders: any): any;
    sendStream(verb: any, requestUrl: any, stream: any, additionalHeaders: any): any;
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl: any, additionalHeaders?: {}): any;
    postJson(requestUrl: any, obj: any, additionalHeaders?: {}): any;
    putJson(requestUrl: any, obj: any, additionalHeaders?: {}): any;
    patchJson(requestUrl: any, obj: any, additionalHeaders?: {}): any;
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb: any, requestUrl: any, data: any, headers: any): any;
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose(): void;
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info: any, data: any): any;
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info: any, data: any, onResult: any): void;
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl: any): any;
    _prepareRequest(method: any, requestUrl: any, headers: any): {
        parsedUrl: any;
        httpModule: any;
        options: {
            host: any;
            port: number;
            path: any;
            method: any;
            headers: {};
            agent: any;
        };
    };
    _mergeHeaders(headers: any): {};
    _getExistingOrDefaultHeader(additionalHeaders: any, header: any, _default: any): any;
    _getAgent(parsedUrl: any): any;
    _proxyAgent: any;
    _agent: any;
    _performExponentialBackoff(retryNumber: any): any;
    _processResponse(res: any, options: any): any;
}
