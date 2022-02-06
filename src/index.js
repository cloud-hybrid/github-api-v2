import { Organizations } from "./organization/organizations";
const organization = await Organizations.initialize("cloud-hybrid");
console.log(await organization.client.orgs.listMembers({
    org: organization.login
}));
