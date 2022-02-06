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

class Organization implements Type {
    readonly client: Client["interface"];

    readonly login: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly verified?: boolean | null;
    readonly blog?: string | null;
    readonly avatar?: string | null;

    public urls: () => URLs;
    public plan: () => Plan;
    public gists: () => Gists;
    public statistics: () => Statistics;
    public repositories: () => Repositories;

    static expression = RegExp("(http?(s))://(api.github.com)/(orgs)/(.*)", "i");

    constructor (client: Client, input: Data) {
        this.client = client.interface;

        this.login = input.login;
        this.name = input.name ?? null;
        this.description = input.description ?? null;
        this.verified = input.is_verified ?? null;
        this.blog = input.blog ?? null;
        this.avatar = input.avatar_url ?? null;

        this.urls = () => Organization.urls(input);
        this.plan = () => Organization.plan(input);
        this.gists = () => Organization.gists(input);
        this.statistics = () => Organization.statistics( input );
        this.repositories = () => Organization.repositories( input );
    }

    private static urls (input: Data): string[] | [] {
        const data: string[] = [];

        Object.values(input).forEach(($) => {
            (Organization.expression.test(String($))) && data.push(String($));
        });

        return data;
    }

    private static gists (input: Data): Gists {
        return new Gists({
            public: input.public_gists,
            private: input.private_gists
        });
    }

    private static plan (input: Data): Plan {
        return new Plan({
            name: input.plan?.name,
            filled_seats: input.plan?.filled_seats,
            private_repos: input.plan?.private_repos,
            space: input.plan?.space
        }) ?? null;
    }

    private static repositories (input: Data): Repositories {
        return new Repositories({
            public: input.public_repos,
            private: input.total_private_repos,
            owned: input.owned_private_repos
        }) ?? null;
    }

    private static statistics (input: Data): Statistics {
        return new Statistics({
            gists: Organization.gists(input),
            repositories: Organization.repositories(input),
            collaborators: input.collaborators ?? null,
            followers: input.followers ?? null,
            creation: input.created_at ?? null,
            modification: input.updated_at ?? null,
            disk: input.disk_usage ?? null
        })
    }
}

export { Organization };

export type { Type }

export default { Organization };
