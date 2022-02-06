interface Type {
    name?: string | null | undefined;
    space?: number | null | undefined;
    private_repos?: number | null | undefined;
    filled_seats?: number | null | undefined;
    seats?: number | null | undefined;
}
declare class Plan implements Type {
    name?: string | null;
    space?: number | null;
    private_repos?: number | null;
    filled_seats?: number | null;
    seats?: number | null;
    constructor(input: Type);
}
export { Plan };
export type { Type };
declare const _default: {
    Plan: typeof Plan;
};
export default _default;
