# github-api-v2 # 

## Usage ##

### Example ###

```node
const organization = await Organizations.initialize("cloud-hybrid");

const members = (await organization.client.orgs.listMembers({ org: organization.login })).data;

const repositories = await organization.client.paginate(
    organization.client.repos.listForOrg, {
        org: organization.login, per_page: 100
    }, (response) => response.data.map(($) => $)
);
```