/*
    Most content of this file is Copyright (c) Mojang. This file is not covered by the Licence in LICENSE.txt !
*/

import { versionMetadata } from "../util"

export function getPreset(key: string, mc_version: string) {
  if (key === "minecraft:nether") {
    return NETHER_PRESET
  } else if (key.startsWith("minecraft:overworld")) {
    const cherry_grove = key === "minecraft:overworld_update_1_20" ? "minecraft:cherry_grove" : versionMetadata[mc_version].biomes.cherry_grove
    const pale_garden = key === "minecraft:overworld_winter_drop" ? "minecraft:pale_garden" : versionMetadata[mc_version].biomes.pale_garden_1
    return OVERWORLD_PRESET(() => cherry_grove, () => pale_garden, () => versionMetadata[mc_version].biomes.pale_garden_2)
  } else {
    return []
  }
}

const NETHER_PRESET = [
  {
    "biome": "minecraft:nether_wastes",
    "parameters": {
      "continentalness": 0.0,
      "depth": 0.0,
      "erosion": 0.0,
      "humidity": 0.0,
      "offset": 0.0,
      "temperature": 0.0,
      "weirdness": 0.0
    }
  },
  {
    "biome": "minecraft:soul_sand_valley",
    "parameters": {
      "continentalness": 0.0,
      "depth": 0.0,
      "erosion": 0.0,
      "humidity": -0.5,
      "offset": 0.0,
      "temperature": 0.0,
      "weirdness": 0.0
    }
  },
  {
    "biome": "minecraft:crimson_forest",
    "parameters": {
      "continentalness": 0.0,
      "depth": 0.0,
      "erosion": 0.0,
      "humidity": 0.0,
      "offset": 0.0,
      "temperature": 0.4,
      "weirdness": 0.0
    }
  },
  {
    "biome": "minecraft:warped_forest",
    "parameters": {
      "continentalness": 0.0,
      "depth": 0.0,
      "erosion": 0.0,
      "humidity": 0.5,
      "offset": 0.375,
      "temperature": 0.0,
      "weirdness": 0.0
    }
  },
  {
    "biome": "minecraft:basalt_deltas",
    "parameters": {
      "continentalness": 0.0,
      "depth": 0.0,
      "erosion": 0.0,
      "humidity": 0.0,
      "offset": 0.175,
      "temperature": -0.5,
      "weirdness": 0.0
    }
  }
]

function OVERWORLD_PRESET(cherry_grove: () => string, pale_garden_1: () => string, pale_garden_2: () => string) {
  return [
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.2,
          -1.05
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:mushroom_fields"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.05,
          -0.455
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:deep_frozen_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.05,
          -0.455
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:deep_cold_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.05,
          -0.455
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:deep_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.05,
          -0.455
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:deep_lukewarm_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.05,
          -0.19
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:warm_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -0.455,
          -0.19
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:frozen_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -0.455,
          -0.19
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:cold_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -0.455,
          -0.19
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -0.455,
          -0.19
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:lukewarm_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          -0.2225
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_shore"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_beach"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:beach"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          0.55
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:swamp"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:mangrove_swamp"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.05
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.05
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.55
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_gravelly_hills"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": pale_garden_2()
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jagged_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": pale_garden_2()
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": pale_garden_2()
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jagged_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_gravelly_hills"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jagged_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          -0.2225
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_shore"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_beach"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:beach"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:swamp"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:mangrove_swamp"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": pale_garden_2()
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_beach"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:beach"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:frozen_river"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:river"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:river"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:eroded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:frozen_river"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.55
        ],
        "temperature": [
          -0.45,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:river"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          -0.2225
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_shore"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_beach"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:beach"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          1
        ],
        "humidity": [
          -1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_beach"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:beach"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:eroded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.05
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:eroded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.05
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.05
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.55
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_gravelly_hills"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.35,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": pale_garden_1()
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:frozen_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.35,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": pale_garden_1()
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.35,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": pale_garden_1()
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:frozen_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:eroded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_gravelly_hills"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.15
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:frozen_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          -0.2225
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_shore"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:swamp"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:mangrove_swamp"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.35,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": pale_garden_1()
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          0,
          0
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.2,
          0.8
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          0.7,
          1
        ],
        "depth": [
          0.2,
          0.9
        ],
        "offset": 0
      },
      "biome": "minecraft:lush_caves"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          0.8,
          1
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          0.2,
          0.9
        ],
        "offset": 0
      },
      "biome": "minecraft:dripstone_caves"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.2,
          -1.05
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:mushroom_fields"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.05,
          -0.455
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:deep_frozen_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.05,
          -0.455
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:deep_cold_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.05,
          -0.455
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:deep_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.05,
          -0.455
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:deep_lukewarm_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.05,
          -0.19
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:warm_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -0.455,
          -0.19
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:frozen_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -0.455,
          -0.19
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:cold_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -0.455,
          -0.19
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -0.455,
          -0.19
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:lukewarm_ocean"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          -0.2225
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_shore"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_beach"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:beach"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          0.55
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:swamp"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:mangrove_swamp"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.05
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.05
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.55
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_gravelly_hills"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": pale_garden_2()
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.7666667
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.26666668
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          -0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jagged_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": pale_garden_2()
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": pale_garden_2()
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.93333334,
          -0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jagged_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_gravelly_hills"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jagged_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.7666667,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.56666666,
          -0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          -0.2225
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_shore"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_beach"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:beach"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:swamp"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          0.4
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:mangrove_swamp"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": pale_garden_2()
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.26666668
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.4,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_beach"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:beach"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_spruce_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:flower_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.26666668,
          -0.05
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:frozen_river"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:river"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:river"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:eroded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:frozen_river"
    },
    {
      "parameters": {
        "weirdness": [
          -0.05,
          0.05
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.55
        ],
        "temperature": [
          -0.45,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:river"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.4
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          -0.2225
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_shore"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_beach"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:beach"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          1
        ],
        "humidity": [
          -1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_beach"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:beach"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:eroded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.05
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:eroded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.05
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.05
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.05,
          0.55
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          0.26666668
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.05,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_gravelly_hills"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.35,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": pale_garden_1()
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.56666666
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.26666668,
          0.4
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:frozen_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.56666666
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.35,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": pale_garden_1()
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.35,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": pale_garden_1()
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.05
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.4,
          0.93333334
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          0.05,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:frozen_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:eroded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:wooded_badlands"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.78,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_gravelly_hills"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_hills"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -1,
          -0.15
        ],
        "humidity": [
          0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.45,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:windswept_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:frozen_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.7666667
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_peaks"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.56666666,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.375,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          1
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          0.45
        ],
        "temperature": [
          0.55,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:desert"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          0.45,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.375
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.7666667,
          0.93333334
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -1,
          -0.2225
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:stony_shore"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          0.03
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.19,
          -0.11
        ],
        "erosion": [
          -0.2225,
          1
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:ice_spikes"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          0.03
        ],
        "erosion": [
          -0.375,
          1
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:swamp"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          -0.11,
          1
        ],
        "erosion": [
          0.55,
          1
        ],
        "temperature": [
          0.2,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:mangrove_swamp"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_slopes"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:grove"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -1,
          -0.78
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_pine_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.78,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.03,
          0.3
        ],
        "erosion": [
          -0.375,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -0.35,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:meadow"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": cherry_grove()
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": pale_garden_1()
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna_plateau"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.78,
          -0.2225
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          -0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:snowy_taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -1,
          -0.45
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          0.2
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.45,
          -0.15
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:taiga"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -1,
          -0.35
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sunflower_plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          -0.35,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:old_growth_birch_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.45
        ],
        "temperature": [
          -0.15,
          0.2
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:dark_forest"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -1,
          -0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:savanna"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          -0.1,
          0.1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:plains"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.1,
          0.3
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:sparse_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          0.93333334,
          1
        ],
        "continentalness": [
          0.3,
          1
        ],
        "erosion": [
          -0.2225,
          0.55
        ],
        "temperature": [
          0.2,
          0.55
        ],
        "humidity": [
          0.3,
          1
        ],
        "depth": [
          1,
          1
        ],
        "offset": 0
      },
      "biome": "minecraft:bamboo_jungle"
    },
    {
      "parameters": {
        "weirdness": [
          -1,
          1
        ],
        "continentalness": [
          -1.2,
          1
        ],
        "erosion": [
          -1,
          -0.375
        ],
        "temperature": [
          -1,
          1
        ],
        "humidity": [
          -1,
          1
        ],
        "depth": [
          1.1,
          1.1
        ],
        "offset": 0
      },
      "biome": "minecraft:deep_dark"
    }
  ]
}
