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
 */
declare class Organizations extends Array {
    private constructor();
    private search;
    private static index;
    static initialize(organization: string): Promise<Organization>;
}
export { Organizations };
export default Organizations;
