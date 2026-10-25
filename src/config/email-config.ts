import type { Config } from "./config.js";

const emailServiceConfig: Config = {
    port: Number(process.env.EMAIL_SERVICE_URL) || 4001,
    nodeEnv: process.env.NODE_ENV || 'development'
}

export default emailServiceConfig;