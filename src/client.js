import { Octokit } from "@octokit/rest";
import { Debugger } from "./debugger";
import { Interface } from "./interface";
/*** REST API Client */
class Client {
    /*** API Interface */
    interface;
    static agent = "Cloud-Technology API User Agent";
    static token = "";
    static base = "https://api.github.com";
    constructor(debug) {
        const $ = new Octokit({
            auth: Client.token,
            userAgent: Client.agent,
            baseUrl: Client.base,
            log: new Debugger(debug)
        });
        this.interface = new Interface($);
    }
    static initialize(debug = "warn") {
        return new Client(debug);
    }
}
const API = Client.initialize();
export { API, Client };
export default API;
