class MQTTClientIsNotProvided extends Error {
  constructor() {
    super("MQTT Client is not provided, please provide it");
  }
}

module.exports = MQTTClientIsNotProvided;
