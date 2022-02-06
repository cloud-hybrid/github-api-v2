import OS from "os";
class Debugger {
    debug;
    info;
    warn;
    error;
    constructor(debug) {
        const logger = (debug === "debug") ? Debugger.debug() : (debug === "info") ? Debugger.info() : (debug === "warn") ? Debugger.warn() : Debugger.error();
        this.debug = logger.debug;
        this.info = logger.info;
        this.warn = logger.warn;
        this.error = logger.error;
    }
    static debug() {
        return {
            debug: ($) => console.debug("[Debug]", JSON.stringify($, null, 4)),
            info: ($) => console.info("[Log]", JSON.stringify($, null, 4)),
            warn: ($) => console.info("[Warning]", JSON.stringify($, null, 4)),
            error: ($) => console.info("[Error]", JSON.stringify($, null, 4))
        };
    }
    static info() {
        return {
            debug: () => OS.devNull,
            info: ($) => console.info("[Log]", JSON.stringify($, null, 4)),
            warn: ($) => console.info("[Warning]", JSON.stringify($, null, 4)),
            error: ($) => console.info("[Error]", JSON.stringify($, null, 4))
        };
    }
    static warn() {
        return {
            debug: () => OS.devNull,
            info: () => OS.devNull,
            warn: ($) => console.info("[Warning]", JSON.stringify($, null, 4)),
            error: ($) => console.info("[Error]", JSON.stringify($, null, 4))
        };
    }
    static error() {
        return {
            debug: () => OS.devNull,
            info: () => OS.devNull,
            warn: () => OS.devNull,
            error: ($) => console.info("[Error]", JSON.stringify($, null, 4))
        };
    }
}
export { Debugger };
export default Debugger;
