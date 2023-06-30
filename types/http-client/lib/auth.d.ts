export const __esModule: boolean;
export class BasicCredentialHandler {
    constructor(username: any, password: any);
    username: any;
    password: any;
    prepareRequest(options: any): void;
    canHandleAuthentication(): boolean;
    handleAuthentication(): any;
}
export class BearerCredentialHandler {
    constructor(token: any);
    token: any;
    prepareRequest(options: any): void;
    canHandleAuthentication(): boolean;
    handleAuthentication(): any;
}
export class PersonalAccessTokenCredentialHandler {
    constructor(token: any);
    token: any;
    prepareRequest(options: any): void;
    canHandleAuthentication(): boolean;
    handleAuthentication(): any;
}
