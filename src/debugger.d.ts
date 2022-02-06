interface Type {
    debug: Function;
    info: Function;
    warn: Function;
    error: Function;
}
declare class Debugger implements Type {
    debug: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
    constructor(debug: "debug" | "info" | "warn" | "error");
    private static debug;
    private static info;
    private static warn;
    private static error;
}
export { Debugger };
export type { Type };
export default Debugger;
