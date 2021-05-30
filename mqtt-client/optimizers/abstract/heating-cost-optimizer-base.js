const isFunction = require("lodash/isFunction");

const {
  NotImplementedException,
  MQTTClientIsNotProvided,
} = require("../../errors");
const logger = require("../../logger");

class HeatingCostOptimizerBase {
  /**
   *
   * @param {import('mqtt').MqttClient} client
   * @param {import('mqtt').IClientSubscribeOptions} options
   */
  constructor(client, options) {
    this._client = client;
    this._defaultOptions = options || {};

    if (!client) {
      throw new MQTTClientIsNotProvided();
    }

    this.onInit();
  }

  /**
   * Support polymorph and agile signature of subscription function
   * @param {import('mqtt').IClientSubscribeOptions|import('mqtt').ClientSubscribeCallback} options
   * @param {import('mqtt').ClientSubscribeCallback=} callback
   */
  _prepareSubscriptionParams(options, callback) {
    if (!isFunction(callback)) {
      return {
        options: this._defaultOptions,
        callback: options,
      };
    }

    return {
      callback,
      options: { ...this._defaultOptions, ...options },
    };
  }

  /**
   * Method for subscribing to topic
   * @param {string|string[]} topic
   * @param {import('mqtt').IClientSubscribeOptions|import('mqtt').ClientSubscribeCallback} options
   * @param {import('mqtt').ClientSubscribeCallback=} callback
   * @returns {import('mqtt').MqttClient}
   */
  subscribe(topic, options, callback) {
    const params = this._prepareSubscriptionParams(options, callback);
    return this._client.subscribe(topic, params.options, params.callback);
  }

  /**
   * Method for unsubscribing from topic
   * @param {string|string[]} topic
   * @param {import('mqtt').IClientSubscribeOptions|import('mqtt').ClientSubscribeCallback} options
   * @param {import('mqtt').ClientSubscribeCallback=} callback
   * @returns {import('mqtt').MqttClient}
   */
  unsubscribe(topic, options, callback) {
    const params = this._prepareSubscriptionParams(options, callback);
    return this._client.unsubscribe(topic, params.options, params.callback);
  }

  /**
   * Handler to setup basic handlers
   */
  onInit() {
    this._client.subscribe("connect", this.onConnect.bind(this));
    this._client.subscribe("message", this.onMessage.bind(this));
    this._client.subscribe("error", this.onError.bind(this));
  }

  /**
   * Handler to log message on connect
   */
  onConnect() {
    logger.info(`client was connected: ${this._client.connected}`);
  }

  /**
   * Handler to log and safety exit on error
   * @param {Error} error
   */
  onError(error) {
    logger.warn(`Error occurred ${error}`);
    process.exit(1);
  }

  /**
   * Handler to log when message is provided
   * @param {string} topic
   * @param {Buffer} message
   * @param {import('mqtt').Packet} packet
   */
  onMessage(topic, message, packet) {
    logger.info(`Topic is ${topic}`);
    logger.info(`Message is ${message}`);
    logger.info(`Packet is ${packet}`);
  }

  /**
   * Handler to turn off or minimize heating when nobody home
   */
  onNobodyHome() {
    throw new NotImplementedException();
  }

  /**
   * Handler to reduce heating on 18 degree Celsius when user is sleeping
   */
  onSleepingTime() {
    throw new NotImplementedException();
  }

  /**
   * Handler to turn off heating when window is opened
   */
  onOpenedWindow() {
    throw new NotImplementedException();
  }

  /**
   * Handler to turn of heating when inside room/house weather is good enough to live
   * 22-25 during the warm season/20-22 during the cold season
   */
  onInsideGoodWeather() {
    throw new NotImplementedException();
  }

  /**
   * Handler to turn of heating when outside room/house weather is good enough to live
   * 22-25 during the warm season/20-22 during the cold season
   */
  onOutsideGoodWeather() {
    throw new NotImplementedException();
  }
}

module.exports = HeatingCostOptimizerBase;
