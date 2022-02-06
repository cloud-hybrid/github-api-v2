import OS from "os";

interface Type {
    debug: Function;
    info: Function;
    warn: Function;
    error: Function;
}

class Debugger implements Type {
    debug: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
    
    constructor(debug: "debug" | "info" | "warn" | "error") {
        const logger = (debug === "debug") ? Debugger.debug() : (debug === "info") ? Debugger.info() : (debug === "warn") ? Debugger.warn() : Debugger.error();

        this.debug = logger.debug;
        this.info = logger.info;
        this.warn = logger.warn;
        this.error = logger.error;
    }

    private static debug() {
        return {
            debug: ($: any) => console.debug( "[Debug]", JSON.stringify( $, null, 4 ) ),
            info: ($: any) => console.info( "[Log]", JSON.stringify( $, null, 4 ) ),
            warn: ($: any) => console.info( "[Warning]", JSON.stringify( $, null, 4 ) ),
            error: ($: any) => console.info( "[Error]", JSON.stringify( $, null, 4 ) )
        };
    }

    private static info() {
        return {
            debug: () => OS.devNull,
            info: ($: any) => console.info( "[Log]", JSON.stringify( $, null, 4 ) ),
            warn: ($: any) => console.info( "[Warning]", JSON.stringify( $, null, 4 ) ),
            error: ($: any) => console.info( "[Error]", JSON.stringify( $, null, 4 ) )
        };
    }

    private static warn() {
        return {
            debug: () => OS.devNull,
            info: () => OS.devNull,
            warn: ($: any) => console.info( "[Warning]", JSON.stringify( $, null, 4 ) ),
            error: ($: any) => console.info( "[Error]", JSON.stringify( $, null, 4 ) )
        };
    }

    private static error() {
        return {
            debug: () => OS.devNull,
            info: () => OS.devNull,
            warn: () => OS.devNull,
            error: ($: any) => console.info( "[Error]", JSON.stringify( $, null, 4 ) )
        };
    }
}

export { Debugger };

export type { Type };

export default Debugger;
