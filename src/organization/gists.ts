interface Type {
    public: number | null | undefined;
    private: number | null | undefined;
}

class Gists implements Type {
    public: number | null | undefined;
    private: number | null | undefined;

    constructor (input: Type) {
        this.public = input.public ?? null;
        this.private = input.private;
    }
}

export { Gists };

export type { Type }

export default { Gists };