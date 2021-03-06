import { API, Client } from "../client";

import { Organization } from "./organization";

/***
 * Organizational Initializer
 * ---
 *
 * Using a given user's authenticated api session, initialize an organization
 * from a filtered array.
 *
 * @example
 * import { Organizations } from "organizations";
 *
 * const organization = await Organizations.initialize("cloud-hybrid");
 *
 * console.log(organization.repositories());
 *
 */
class Organizations extends Array {
    private constructor() {
        super();
    }

    private search: (name: string) => Organization = (name: string) => {
        const $ = this.filter(($: Organization) => $.login === name || $.name === name );

        return ($.length === 1) ? $.pop() : Error("No Organizations Found" + " " + "(" + name + ")");
    };

    private static async index(login: string) {
        return await API.interface.orgs.get( { org: login } ).then( ($) => $.data );
    }

    static async initialize(organization: string) {
        const client: Client = API;

        const instance = new Organizations();

        const data = await client.interface.orgs.listForAuthenticatedUser().then( ($) => $.data );

        for await ( const organization of data ) {
            const input = await Organizations.index( organization.login );
            const $ = new Organization( client, input );
            instance.push($);
        }

        return instance.search(organization);
    }
}

export { Organizations };

export default Organizations;