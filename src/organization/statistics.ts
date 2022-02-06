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

class Statistics implements Type {
    gists?: Gists | null;
    repositories?: Repositories | null;
    collaborators?: number | null;
    followers?: number | null;
    creation?: string | null;
    modification?: string | null;
    disk?: number | null;

    constructor (input: Type) {
        this.gists = input.gists ?? null;
        this.repositories = input.repositories ?? null;
        this.collaborators = input.collaborators ?? null;
        this.followers = input.followers ?? null;
        this.creation = input.creation ?? null;
        this.modification = input.modification ?? null;
        this.disk = input.disk ?? null;
    }
}

export { Statistics };

export type { Type }

export default { Statistics };
