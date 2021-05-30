module.exports = [
  {
    name: "Датчик температуры/влажности",
    room: "Улица",
    type: "devices.types.sensor",
    mqtt: [
      {
        type: "on",
        set: "/devices/yandex/controls/light1/on",
        stat: "/devices/yandex/controls/light1",
      },
      {
        type: "rgb",
        set: "/devices/yandex/controls/light3/on",
        stat: "/devices/yandex/controls/light3",
      },
      {
        type: "temperature_k",
        set: "/devices/yandex/controls/light4/on",
        stat: "/devices/yandex/controls/light4",
      },
      {
        type: "brightness",
        set: "/devices/yandex/controls/light5/on",
        stat: "/devices/yandex/controls/light5",
      },
    ],
    capabilities: [
      {
        type: "devices.capabilities.on_off",
        retrievable: true,
        state: {
          instance: "on",
          value: true,
        },
      },
      {
        type: "devices.capabilities.range",
        retrievable: true,

        parameters: {
          instance: "brightness",
          unit: "unit.percent",
          range: {
            min: 0,
            max: 100,
            precision: 1,
          },
        },
        state: {
          instance: "brightness",
          value: 10,
        },
      },
      {
        type: "devices.capabilities.color_setting",
        retrievable: true,
        parameters: {
          color_model: "rgb",
          temperature_k: {
            min: 2000,
            max: 8500,
            precision: 500,
          },
        },
        state: {
          instance: "rgb",
          value: 0,
        },
      },
    ],
  },
  {
    name: "Датчик температуры/влажности",
    room: "Комната",
    type: "devices.types.sensor",
    mqtt: [
      {
        type: "on",
        set: "/devices/yandex/controls/light1/on",
        stat: "/devices/yandex/controls/light1",
      },
      {
        type: "rgb",
        set: "/devices/yandex/controls/light3/on",
        stat: "/devices/yandex/controls/light3",
      },
      {
        type: "temperature_k",
        set: "/devices/yandex/controls/light4/on",
        stat: "/devices/yandex/controls/light4",
      },
      {
        type: "brightness",
        set: "/devices/yandex/controls/light5/on",
        stat: "/devices/yandex/controls/light5",
      },
    ],
    capabilities: [
      {
        type: "devices.capabilities.on_off",
        retrievable: true,
        state: {
          instance: "on",
          value: true,
        },
      },
      {
        type: "devices.capabilities.range",
        retrievable: true,

        parameters: {
          instance: "brightness",
          unit: "unit.percent",
          range: {
            min: 0,
            max: 100,
            precision: 1,
          },
        },
        state: {
          instance: "brightness",
          value: 10,
        },
      },
      {
        type: "devices.capabilities.color_setting",
        retrievable: true,
        parameters: {
          color_model: "rgb",
          temperature_k: {
            min: 2000,
            max: 8500,
            precision: 500,
          },
        },
        state: {
          instance: "rgb",
          value: 0,
        },
      },
    ],
  },
  {
    name: "Датчик открытия окон",
    room: "Комната",
    type: "devices.types.openable",
    mqtt: [
      {
        type: "on",
        set: "/devices/yandex/controls/light1/on",
        stat: "/devices/yandex/controls/light1",
      },
      {
        type: "rgb",
        set: "/devices/yandex/controls/light3/on",
        stat: "/devices/yandex/controls/light3",
      },
      {
        type: "temperature_k",
        set: "/devices/yandex/controls/light4/on",
        stat: "/devices/yandex/controls/light4",
      },
      {
        type: "brightness",
        set: "/devices/yandex/controls/light5/on",
        stat: "/devices/yandex/controls/light5",
      },
    ],
    capabilities: [
      {
        type: "devices.capabilities.on_off",
        retrievable: true,
        state: {
          instance: "on",
          value: true,
        },
      },
      {
        type: "devices.capabilities.range",
        retrievable: true,

        parameters: {
          instance: "brightness",
          unit: "unit.percent",
          range: {
            min: 0,
            max: 100,
            precision: 1,
          },
        },
        state: {
          instance: "brightness",
          value: 10,
        },
      },
      {
        type: "devices.capabilities.color_setting",
        retrievable: true,
        parameters: {
          color_model: "rgb",
          temperature_k: {
            min: 2000,
            max: 8500,
            precision: 500,
          },
        },
        state: {
          instance: "rgb",
          value: 0,
        },
      },
    ],
  },
  {
    name: "Датчик присутствия",
    room: "Комната",
    type: "devices.types.sensor",
    mqtt: [
      {
        type: "on",
        set: "/devices/yandex/controls/light1/on",
        stat: "/devices/yandex/controls/light1",
      },
      {
        type: "rgb",
        set: "/devices/yandex/controls/light3/on",
        stat: "/devices/yandex/controls/light3",
      },
      {
        type: "temperature_k",
        set: "/devices/yandex/controls/light4/on",
        stat: "/devices/yandex/controls/light4",
      },
      {
        type: "brightness",
        set: "/devices/yandex/controls/light5/on",
        stat: "/devices/yandex/controls/light5",
      },
    ],
    capabilities: [
      {
        type: "devices.capabilities.on_off",
        retrievable: true,
        state: {
          instance: "on",
          value: true,
        },
      },
      {
        type: "devices.capabilities.range",
        retrievable: true,

        parameters: {
          instance: "brightness",
          unit: "unit.percent",
          range: {
            min: 0,
            max: 100,
            precision: 1,
          },
        },
        state: {
          instance: "brightness",
          value: 10,
        },
      },
      {
        type: "devices.capabilities.color_setting",
        retrievable: true,
        parameters: {
          color_model: "rgb",
          temperature_k: {
            min: 2000,
            max: 8500,
            precision: 500,
          },
        },
        state: {
          instance: "rgb",
          value: 0,
        },
      },
    ],
  },
  {
    name: "Реле на радиаторе",
    room: "Комната",
    type: "devices.types.switch",
    mqtt: [
      {
        type: "on",
        set: "/devices/yandex/controls/light1/on",
        stat: "/devices/yandex/controls/light1",
      },
      {
        type: "rgb",
        set: "/devices/yandex/controls/light3/on",
        stat: "/devices/yandex/controls/light3",
      },
      {
        type: "temperature_k",
        set: "/devices/yandex/controls/light4/on",
        stat: "/devices/yandex/controls/light4",
      },
      {
        type: "brightness",
        set: "/devices/yandex/controls/light5/on",
        stat: "/devices/yandex/controls/light5",
      },
    ],
    capabilities: [
      {
        type: "devices.capabilities.on_off",
        retrievable: true,
        state: {
          instance: "on",
          value: true,
        },
      },
      {
        type: "devices.capabilities.range",
        retrievable: true,

        parameters: {
          instance: "brightness",
          unit: "unit.percent",
          range: {
            min: 0,
            max: 100,
            precision: 1,
          },
        },
        state: {
          instance: "brightness",
          value: 10,
        },
      },
      {
        type: "devices.capabilities.color_setting",
        retrievable: true,
        parameters: {
          color_model: "rgb",
          temperature_k: {
            min: 2000,
            max: 8500,
            precision: 500,
          },
        },
        state: {
          instance: "rgb",
          value: 0,
        },
      },
    ],
  },
  {
    name: "Термостат",
    room: "Комната",
    type: "devices.types.thermostat",
    mqtt: [
      {
        type: "on",
        set: "/devices/yandex/controls/light1/on",
        stat: "/devices/yandex/controls/light1",
      },
      {
        type: "rgb",
        set: "/devices/yandex/controls/light3/on",
        stat: "/devices/yandex/controls/light3",
      },
      {
        type: "temperature_k",
        set: "/devices/yandex/controls/light4/on",
        stat: "/devices/yandex/controls/light4",
      },
      {
        type: "brightness",
        set: "/devices/yandex/controls/light5/on",
        stat: "/devices/yandex/controls/light5",
      },
    ],
    capabilities: [
      {
        type: "devices.capabilities.on_off",
        retrievable: true,
        state: {
          instance: "on",
          value: true,
        },
      },
      {
        type: "devices.capabilities.range",
        retrievable: true,

        parameters: {
          instance: "brightness",
          unit: "unit.percent",
          range: {
            min: 0,
            max: 100,
            precision: 1,
          },
        },
        state: {
          instance: "brightness",
          value: 10,
        },
      },
      {
        type: "devices.capabilities.color_setting",
        retrievable: true,
        parameters: {
          color_model: "rgb",
          temperature_k: {
            min: 2000,
            max: 8500,
            precision: 500,
          },
        },
        state: {
          instance: "rgb",
          value: 0,
        },
      },
    ],
  },
];
