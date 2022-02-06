import { EndpointInterface, RequestInterface } from "@octokit/types";
import { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods/dist-types/generated/parameters-and-response-types";

type Organizations = RestEndpointMethodTypes["orgs"];

type Request = Organizations["get"];

type Response = Request["response"];
type Input = Request["parameters"];

type Data = Response["data"];
type Headers = Response["headers"];

type URLs = (string[] | []);

interface Organization {
    (input?: Input): Promise<Response>;

    defaults: RequestInterface["defaults"];
    endpoint: EndpointInterface<{ url: string; }>;
}

export type { Organization, Organizations, Request, Response, Input, Data, Headers, URLs };