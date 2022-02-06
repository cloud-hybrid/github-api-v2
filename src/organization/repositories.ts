interface Type {
    private?: number | undefined | null;
    owned?: number | undefined | null;
    public?: number | undefined | null;
}

class Repositories implements Type {
    private?: number | null;
    public?: number | null;
    owned?: number | null;

    constructor (input: Type) {
        this.private = input.private ?? null;
        this.public = input.public ?? null;
        this.owned = input.private ?? null;
    }
}

export { Repositories };

export type { Type }

export default { Repositories };
