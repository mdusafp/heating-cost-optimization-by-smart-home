const bunyan = require("bunyan");

const logger = bunyan.createLogger({ name: "heating-optimizer-mqtt-client" });

module.exports = logger;
