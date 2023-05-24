// dbclient.ts ---------------------------------------------------------------

/**
 * Low level Postgres client.
 *
 * @packageDocumentation
 */

// External Modules ----------------------------------------------------------

import {Pool, PoolClient} from "pg";

// Internal Modules

//import logger from "../util/ServerLogger";

let pool:Pool;

// Public Objects ------------------------------------------------------------

/**
 * Returns a connected client, creating the pool if this is the first call.
 * User of this client MUST call client.release() when finished, to return
 * it to the pool.
 */
export default async function dbclient(): Promise<PoolClient> {

    // Create a configured Pool if it does not yet exist.
    if (!pool) {
        pool = new Pool({
            connectionString: process.env.DATABASE_URL ? process.env.DATABASE_URL : "test",
            max: 5,
        });
/*
        logger.info({
            context: "dbclient.dbclient",
            msg: "Creating client connection pool",
        });
*/
    }

    // Acquire and return a Client from the Pool.
    const client = await pool.connect();
/*
    logger.info({
        context:"dbclient.dbclient",
        msg: "Returning a pool client",
    });
*/
    return client;

}

// Private Objects ---------------------------------------------
