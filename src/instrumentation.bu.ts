// instrumentation.ts --------------------------------------------------------

"use server"

/**
 * Startup processing to initialize the database and other such goodies.
 *
 * @packageDocumentation
 */

//import "server-only";

export async function register() {
//    "use server"
    console.log("register() was called");
    //await import("./app/server/models/Database");
    console.log("register() was completed");
}
