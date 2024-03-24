require("dotenv").config();

import config from "./config";
import { server } from "./initializers/express/";

try {
  console.log(`[${config.APP_NAME}] Bootstrapping micro service`);
  server({ hostname: config.NODE_HOSTNAME, port: config.NODE_PORT });
} catch (error) {
  console.error(`[${name}] Caught exception: ${error}`);
}
