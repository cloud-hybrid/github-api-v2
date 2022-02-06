class Statistics {
    gists;
    repositories;
    collaborators;
    followers;
    creation;
    modification;
    disk;
    constructor(input) {
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
export default { Statistics };
