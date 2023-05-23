// server/models/Database.ts -------------------------------------------------

/**
 * Configuration of the Sequelize models and database used by this application.
 *
 * @packageDocumentation
 */

// External Modules ----------------------------------------------------------

import {Sequelize} from "sequelize-typescript";
import "server-only";

// Internal Modules ----------------------------------------------------------

import Library from "./Library";
import logger from "../../util/ServerLogger";

const DATABASE_URL = process.env.DATABASE_URL ? process.env.DATABASE_URL : "test";

// Public Objects ------------------------------------------------------------

export const Database = new Sequelize(DATABASE_URL, {
    logging: false,
    pool: {
        acquire: 30000,
        idle: 10000,
        max: 5,
        min: 0
    }
});

Database.addModels([
    Library,
]);

logger.info({
    context: "Startup",
    msg: "Sequelize models initialized",
    dialect: `${Database.getDialect()}`,
    name: `${Database.getDatabaseName()}`,
});

export default Database;
