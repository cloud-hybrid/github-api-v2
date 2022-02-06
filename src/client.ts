import REST, { Octokit } from "@octokit/rest";

import { Debugger } from "./debugger";

interface RestEndpointMethods {}

type REST = RestEndpointMethods;

import { Interface } from "./interface";

/*** REST API Client */
class Client {
    /*** API Interface */
    public readonly interface: Interface;

    private static agent = "Cloud-Technology API User Agent";
    private static token = "";
    private static base = "https://api.github.com";

    private constructor(debug: "debug" | "info" | "warn" | "error") {
        const $ = new Octokit( {
            auth: Client.token,
            userAgent: Client.agent,
            baseUrl: Client.base,
            log: new Debugger(debug)
        } );

        this.interface = new Interface($);
    }

    public static initialize (debug: "debug" | "info" | "warn" | "error" = "warn") {
        return new Client( debug );
    }
}

type Type = typeof API;

const API = Client.initialize();

export { API, Client };

export type { Type };

export default API;
