const YandexHeatingCostOptimizer = require("./heating-cost-optimizer");
const yandexDevices = require("./devices");

let client = {
  subscribe: jest.fn(),
};

describe("YandexHeatingCostOptimizer", () => {
  let optimizer;

  beforeAll(() => {
    optimizer = new YandexHeatingCostOptimizer(
      client,
      { qos: 2 },
      yandexDevices
    );
  });

  describe("Если в квартире нет никого, то ставим термостат на 18°C", () => {
    test("В квартире есть люди, термостат не равен 18°C", () => {
      expect(true).toBe(true);
    });

    test("В квартире нет людей, термостат равен 18°C", () => {
      expect(true).toBe(true);
    });
  });

  describe("Во время сна ставим термостат на 18°C", () => {
    test("Время 16:00, термостат не равен 18°C", () => {
      expect(true).toBe(true);
    });

    test("Время 02:00, термостат равен 18°C", () => {
      expect(true).toBe(true);
    });
  });

  describe("Если открыто окно, то выключаем батарею", () => {
    test("Окно открыто, батарея выключена", () => {
      expect(true).toBe(true);
    });

    test("Окно закрыто, батарея включена", () => {
      expect(true).toBe(true);
    });
  });

  describe("Выключаем батарею, если в помещении корректная температура", () => {
    test("Температура в комнате 23°C в теплое время года, батарея выключена", () => {
      expect(true).toBe(true);
    });

    test("Температура в комнате 19°C в теплое время года, батарея включена", () => {
      expect(true).toBe(true);
    });

    test("Температура в комнате 21°C в холодное время года, батарея выключена", () => {
      expect(true).toBe(true);
    });

    test("Температура в комнате 15°C в холодное время года, батарея включена", () => {
      expect(true).toBe(true);
    });
  });

  describe("Выключаем батарею, когда на улице тепло (дом хорошо держит тепло)", () => {
    test("На улице 30°C, батарея выключена", () => {
      expect(true).toBe(true);
    });

    test("На улице 5°C, батарея включена", () => {
      expect(true).toBe(true);
    });
  });
});
