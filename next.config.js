/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    }
}

module.exports = nextConfig

/*
module.exports = async (phase) => {
    console.log("STARTING AT PHASE ", phase);
    await import("./src/app/server/models/Database");
    console.log("FINISHED DATABASE IMPORT");
    return nextConfig;
}
*/
