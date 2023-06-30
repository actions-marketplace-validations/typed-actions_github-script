export const __esModule: boolean;
export class OidcClient {
    static createHttpClient(allowRetry?: boolean, maxRetry?: number): http_client_1.HttpClient;
    static getRequestToken(): string;
    static getIDTokenUrl(): string;
    static getCall(id_token_url: any): any;
    static getIDToken(audience: any): any;
}
import http_client_1 = require("@actions/http-client");
