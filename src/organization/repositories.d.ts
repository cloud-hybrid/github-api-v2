interface Type {
    private?: number | undefined | null;
    owned?: number | undefined | null;
    public?: number | undefined | null;
}
declare class Repositories implements Type {
    private?: number | null;
    public?: number | null;
    owned?: number | null;
    constructor(input: Type);
}
export { Repositories };
export type { Type };
declare const _default: {
    Repositories: typeof Repositories;
};
export default _default;
