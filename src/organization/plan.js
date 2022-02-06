class Plan {
    name;
    space;
    private_repos;
    filled_seats;
    seats;
    constructor(input) {
        this.name = input.name ?? null;
        this.space = input.space ?? null;
        this.private_repos = input.private_repos ?? null;
        this.filled_seats = input.filled_seats ?? null;
        this.seats = input.seats ?? null;
    }
}
export { Plan };
export default { Plan };
