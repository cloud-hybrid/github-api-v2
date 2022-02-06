import { EndpointInterface, RequestInterface } from "@octokit/types";
import { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods/dist-types/generated/parameters-and-response-types";
declare type Organizations = RestEndpointMethodTypes["orgs"];
declare type Request = Organizations["get"];
declare type Response = Request["response"];
declare type Input = Request["parameters"];
declare type Data = Response["data"];
declare type Headers = Response["headers"];
declare type URLs = (string[] | []);
interface Organization {
    (input?: Input): Promise<Response>;
    defaults: RequestInterface["defaults"];
    endpoint: EndpointInterface<{
        url: string;
    }>;
}
export type { Organization, Organizations, Request, Response, Input, Data, Headers, URLs };
