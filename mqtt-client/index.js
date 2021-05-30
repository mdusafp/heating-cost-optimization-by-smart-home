const path = require("path");

const runMqttClient = require("./run-mqtt-client");
const YandexHeatingCostOptimizer = require("./optimizers/yandex/heating-cost-optimizer");
const yandexDevices = require("./optimizers/yandex/devices");

require("dotenv").config({ path: path.resolve(__dirname, ".env") });

async function main() {
  const optimizer = new YandexHeatingCostOptimizer(
    runMqttClient(process.env.BROKER_URL),
    { qos: 2 },
    yandexDevices
  );
  optimizer.onInsideGoodWeather();
  process.exit(0);
}

main();
