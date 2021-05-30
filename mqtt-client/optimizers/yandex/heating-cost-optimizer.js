const HeatingCostOptimizerBase = require("../abstract/heating-cost-optimizer-base");

class YandexHeatingCostOptimizer extends HeatingCostOptimizerBase {
  /**
   *
   * @param {import('mqtt').MqttClient} client
   * @param {import('mqtt').IClientSubscribeOptions} options
   */
  constructor(client, options, devices) {
    super(client, options);
    this._devices = devices;
  }

  onInit() {
    super.onInit();
    // this._client.subscribe();
  }

  onNobodyHome() {
    console.log("Called YandexHeatingCostOptimizer.onNobodyHome");
  }

  onSleepingTime() {
    console.log("Called YandexHeatingCostOptimizer.onSleepingTime");
  }

  onOpenedWindow() {
    console.log("Called YandexHeatingCostOptimizer.onOpenedWindow");
  }

  onInsideGoodWeather() {
    console.log("Called YandexHeatingCostOptimizer.onInsideGoodWeather");
  }

  onOutsideGoodWeather() {
    console.log("Called YandexHeatingCostOptimizer.onOutsideGoodWeather");
  }
}

module.exports = YandexHeatingCostOptimizer;
