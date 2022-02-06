import { Gists } from "./gists";
import { Repositories } from "./repositories";
import { Plan } from "./plan";
import { Statistics } from "./statistics";
import { Client } from "../client";
import type { Data, URLs } from "./types";
interface Type {
    login?: string | null;
    name?: string | null;
    description?: string | null;
    plan?: object | null;
    verified?: boolean | null;
    blog?: string | null;
    avatar?: string | null;
}
/***
 * Github Organization Type
 * ---
 *
 * Class Representation of API Response, with additional
 * utility functions and statistics.
 *
 * @example
 * const Organizations = await API.orgs.listForAuthenticatedUser().then(($) => $?.data?.map(($) => $?.login));
 *
 * const organization = await API.orgs.get({
 *     org: Organizations[0]
 * }).then(($) => $.data);
 *
 * const $ = new Organization(organization);
 *
 * console.log($);
 *
 */
declare class Organization implements Type {
    readonly client: Client["interface"];
    readonly login: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly verified?: boolean | null;
    readonly blog?: string | null;
    readonly avatar?: string | null;
    urls: () => URLs;
    plan: () => Plan;
    gists: () => Gists;
    statistics: () => Statistics;
    repositories: () => Repositories;
    static expression: RegExp;
    constructor(client: Client, input: Data);
    private static urls;
    private static gists;
    private static plan;
    private static repositories;
    private static statistics;
}
export { Organization };
export type { Type };
declare const _default: {
    Organization: typeof Organization;
};
export default _default;
