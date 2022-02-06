import { Gists } from "./gists";
import { Repositories } from "./repositories";
import { Plan } from "./plan";
import { Statistics } from "./statistics";
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
class Organization {
    client;
    login;
    name;
    description;
    verified;
    blog;
    avatar;
    urls;
    plan;
    gists;
    statistics;
    repositories;
    static expression = RegExp("(http?(s))://(api.github.com)/(orgs)/(.*)", "i");
    constructor(client, input) {
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
        this.statistics = () => Organization.statistics(input);
        this.repositories = () => Organization.repositories(input);
    }
    static urls(input) {
        const data = [];
        Object.values(input).forEach(($) => {
            (Organization.expression.test(String($))) && data.push(String($));
        });
        return data;
    }
    static gists(input) {
        return new Gists({
            public: input.public_gists,
            private: input.private_gists
        });
    }
    static plan(input) {
        return new Plan({
            name: input.plan?.name,
            filled_seats: input.plan?.filled_seats,
            private_repos: input.plan?.private_repos,
            space: input.plan?.space
        }) ?? null;
    }
    static repositories(input) {
        return new Repositories({
            public: input.public_repos,
            private: input.total_private_repos,
            owned: input.owned_private_repos
        }) ?? null;
    }
    static statistics(input) {
        return new Statistics({
            gists: Organization.gists(input),
            repositories: Organization.repositories(input),
            collaborators: input.collaborators ?? null,
            followers: input.followers ?? null,
            creation: input.created_at ?? null,
            modification: input.updated_at ?? null,
            disk: input.disk_usage ?? null
        });
    }
}
export { Organization };
export default { Organization };
