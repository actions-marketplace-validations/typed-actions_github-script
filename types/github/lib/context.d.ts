export const __esModule: boolean;
export class Context {
    payload: any;
    eventName: string;
    sha: string;
    ref: string;
    workflow: string;
    action: string;
    actor: string;
    job: string;
    runNumber: number;
    runId: number;
    apiUrl: string;
    serverUrl: string;
    graphqlUrl: string;
    get issue(): {
        owner: any;
        repo: any;
    } & {
        number: any;
    };
    get repo(): {
        owner: any;
        repo: any;
    };
}
