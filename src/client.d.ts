import { Interface } from "./interface";
/*** REST API Client */
declare class Client {
    /*** API Interface */
    readonly interface: Interface;
    private static agent;
    private static token;
    private static base;
    private constructor();
    static initialize(debug?: "debug" | "info" | "warn" | "error"): Client;
}
declare type Type = typeof API;
declare const API: Client;
export { API, Client };
export type { Type };
export default API;
