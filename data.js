var APP_DATA = {
  "scenes": [
    {
      "id": "0-scene-1",
      "name": "SCENE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.1404766171839,
        "pitch": 0.11035780886592583,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": 3.1126331583316764,
          "pitch": 0.10558698713191639,
          "rotation": 3.141592653589793,
          "target": "1-scene-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-scene-2",
      "name": "SCENE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.04474389536930801,
        "pitch": 0.05090596491873356,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": -0.0321223714469312,
          "pitch": 0.06507119843140075,
          "rotation": 3.141592653589793,
          "target": "0-scene-1"
        },
        {
          "yaw": 3.133211852037581,
          "pitch": 0.06890057726621279,
          "rotation": 3.141592653589793,
          "target": "2-scene-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-scene-3",
      "name": "SCENE 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.06430289082037532,
        "pitch": -0.01564208661092792,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": -0.009344899651116734,
          "pitch": 0.020010860928632468,
          "rotation": 3.141592653589793,
          "target": "1-scene-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "UNGER STEEL FZE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
