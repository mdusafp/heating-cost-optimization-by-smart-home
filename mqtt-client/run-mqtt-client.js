const mqtt = require("mqtt");
const logger = require("./logger");

/**
 *
 * @param {*} brokerUrl
 * @param {*} options
 * @returns {import('mqtt').MqttClient}
 */
function runMqttClient(brokerUrl, options) {
  return mqtt.connect(brokerUrl, options);
}

module.exports = runMqttClient;
