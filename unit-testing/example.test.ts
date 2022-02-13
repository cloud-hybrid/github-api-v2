import URI from "url";

import HTTPs from "https";

/*** Example Backend Module */

/***
 *
 * @param {string} uri
 * @param {{}} headers
 * @param {Function} resolve
 * @param {Function} reject
 *
 * @constructor
 *
 */

const GET = ( uri: string, headers = {}, resolve: Function, reject: Function ) => {
    const $: { body: Buffer | string | null, data: string } = { body: "", data: "" };

    const options = URI.urlToHttpOptions( new URL( uri ) );

    options.headers = { ... options.headers, ... headers };

    HTTPs.get( options, ( response ) => {
        /// HTTP Redirect(s)
        if ( response.statusCode === 301 || response.statusCode === 302 ) {
            return GET( response.headers.location as string, headers, resolve, reject );
        }

        response.on( "error", ( error ) => {
            reject( error );
        } );

        response.on( "data", ( chunk ) => {
            $.body += Buffer.from(chunk).toString("utf-8");
        } );

        response.on( "end", () => {
            resolve( JSON.parse(  String($.body) ) );
        } );
    } );
};

type Headers = { [$: string]: string };

/***
 *
 * @param {string} url
 * @param {Headers} headers
 *
 * @returns {Promise<{body: string[], data: string}>}
 */

const get = ( url: string, headers: Headers ): Promise<{ body: string[], data: string }> => {
    return new Promise( ( resolve, reject ) => {
        GET( url, headers, resolve, reject );
    } );
};

/*** Unit Testing Starting Point */

for (let i = 0; i < 100; i++) {
    /// 100 iterations are run due to previous issues associated with generating a raw, JSON serializable
    /// string from HTTP response chunks, which should come in as a Base64-encoded Buffer.
    /// Overall, the test(s) should take ~ 20 seconds.

    describe( ["HTTP Unit Test", "", ["(", i, ")"].join("")].join(" ") , () => {
        it( ["Asynchronous Invocation", ["(", i, ")"].join("")].join(" "), async () => {
            const gettable = await get( ["https://jsonplaceholder.typicode.com/posts/", i].join(""), {} );

            console.log( "[Log] GET Request", gettable );

            expect( gettable ).toBeTruthy();
        } );
    } );
}
