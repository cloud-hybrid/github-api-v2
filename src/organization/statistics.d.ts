import { Gists } from "./gists";
import { Repositories } from "./repositories";
interface Type {
    gists?: Gists | null;
    repositories?: Repositories | null;
    collaborators?: number | null;
    followers?: number | null;
    creation?: string | null;
    modification?: string | null;
    disk?: number | null;
}
declare class Statistics implements Type {
    gists?: Gists | null;
    repositories?: Repositories | null;
    collaborators?: number | null;
    followers?: number | null;
    creation?: string | null;
    modification?: string | null;
    disk?: number | null;
    constructor(input: Type);
}
export { Statistics };
export type { Type };
declare const _default: {
    Statistics: typeof Statistics;
};
export default _default;
