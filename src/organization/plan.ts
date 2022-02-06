interface Type {
    name?: string | null | undefined;
    space?: number | null | undefined;
    private_repos?: number | null | undefined;
    filled_seats?: number | null | undefined;
    seats?: number | null | undefined;
}

class Plan implements Type {
    name?: string | null;
    space?: number | null;
    private_repos?: number | null;
    filled_seats?: number | null;
    seats?: number | null;

    constructor (input: Type) {
        this.name = input.name ?? null;
        this.space = input.space ?? null;
        this.private_repos = input.private_repos ?? null;
        this.filled_seats = input.filled_seats ?? null;
        this.seats = input.seats ?? null;
    }
}

export { Plan };

export type { Type }

export default { Plan };
