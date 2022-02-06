interface Type {
    public: number | null | undefined;
    private: number | null | undefined;
}
declare class Gists implements Type {
    public: number | null | undefined;
    private: number | null | undefined;
    constructor(input: Type);
}
export { Gists };
export type { Type };
declare const _default: {
    Gists: typeof Gists;
};
export default _default;
