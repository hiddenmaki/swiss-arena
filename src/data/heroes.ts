export type HeroRole = "Warrior" | "Assassin" | "Mage" | "Marksman" | "Support" | "Tank";

export interface HeroAbility {
  name: string;
  description: string;
  cooldown: string;
  manaCost: string;
}

export interface Hero {
  id: string;
  name: string;
  title: string;
  role: HeroRole;
  difficulty: "Easy" | "Medium" | "Hard";
  tier: "S" | "A" | "B" | "C" | "D" | "UNASSIGNED";
  lore: string;
  stats: {
    damage: number;
    mobility: number;
    durability: number;
    utility: number;
    difficulty: number;
  };
  abilities: HeroAbility[];
  tips: string[];
  counters: string[];
  synergies: string[];
  lane: "DS Lane" | "Mid Lane" | "Jungle" | "ADC" | "Support" | "Flex";
}

export const heroes: Hero[] = [
  {
    "id": "thane",
    "name": "Thane",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Hard",
    "tier": "B",
    "lore": "Thane is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 6,
      "durability": 6,
      "utility": 6,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "mina",
    "name": "Mina",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Medium",
    "tier": "B",
    "lore": "Mina is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 6,
      "durability": 8,
      "utility": 9,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "omega",
    "name": "Omega",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Hard",
    "tier": "C",
    "lore": "Omega is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 8,
      "durability": 7,
      "utility": 5,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "gildur",
    "name": "Gildur",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Gildur is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 7,
      "durability": 6,
      "utility": 5,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "toro",
    "name": "Toro",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Medium",
    "tier": "A",
    "lore": "Toro is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 4,
      "durability": 4,
      "utility": 5,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "taara",
    "name": "Taara",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Easy",
    "tier": "D",
    "lore": "Taara is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 9,
      "durability": 5,
      "utility": 4,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "grakk",
    "name": "Grakk",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Easy",
    "tier": "D",
    "lore": "Grakk is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 7,
      "durability": 5,
      "utility": 6,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "chaugnar",
    "name": "Chaugnar",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Easy",
    "tier": "S",
    "lore": "Chaugnar is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 6,
      "durability": 8,
      "utility": 9,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "cresht",
    "name": "Cresht",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Easy",
    "tier": "B",
    "lore": "Cresht is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 9,
      "durability": 8,
      "utility": 9,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "lumburr",
    "name": "Lumburr",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Medium",
    "tier": "S",
    "lore": "Lumburr is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 4,
      "durability": 6,
      "utility": 5,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "xeniel",
    "name": "Xeniel",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Easy",
    "tier": "D",
    "lore": "Xeniel is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 5,
      "durability": 5,
      "utility": 4,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "teemee",
    "name": "Teemee",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Medium",
    "tier": "D",
    "lore": "Teemee is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 8,
      "durability": 7,
      "utility": 5,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "arum",
    "name": "Arum",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Hard",
    "tier": "A",
    "lore": "Arum is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 6,
      "durability": 5,
      "utility": 4,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "baldum",
    "name": "Baldum",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Medium",
    "tier": "D",
    "lore": "Baldum is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 7,
      "durability": 4,
      "utility": 8,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "y-bneth",
    "name": "Y'bneth",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Easy",
    "tier": "S",
    "lore": "Y'bneth is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 8,
      "durability": 7,
      "utility": 4,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "wiro",
    "name": "Wiro",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Medium",
    "tier": "A",
    "lore": "Wiro is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 8,
      "durability": 4,
      "utility": 4,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "ata",
    "name": "Ata",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Easy",
    "tier": "S",
    "lore": "Ata is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 7,
      "durability": 9,
      "utility": 5,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "dextra",
    "name": "Dextra",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Easy",
    "tier": "B",
    "lore": "Dextra is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 5,
      "durability": 7,
      "utility": 8,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "roxie",
    "name": "Roxie",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Medium",
    "tier": "S",
    "lore": "Roxie is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 6,
      "durability": 7,
      "utility": 6,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "billow",
    "name": "Billow",
    "title": "Tank of Athanor",
    "role": "Tank",
    "difficulty": "Hard",
    "tier": "D",
    "lore": "Billow is a powerful Tank known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 6,
      "durability": 5,
      "utility": 8,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "zephys",
    "name": "Zephys",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "A",
    "lore": "Zephys is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 9,
      "durability": 7,
      "utility": 6,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "zanis",
    "name": "Zanis",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Easy",
    "tier": "B",
    "lore": "Zanis is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 7,
      "durability": 7,
      "utility": 5,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "lu-bu",
    "name": "Lu Bu",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Easy",
    "tier": "B",
    "lore": "Lu Bu is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 6,
      "durability": 9,
      "utility": 5,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "ormarr",
    "name": "Ormarr",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Easy",
    "tier": "S",
    "lore": "Ormarr is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 7,
      "durability": 5,
      "utility": 7,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "maloch",
    "name": "Maloch",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Medium",
    "tier": "A",
    "lore": "Maloch is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 4,
      "durability": 7,
      "utility": 7,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "mortos",
    "name": "Mortos",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "S",
    "lore": "Mortos is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 9,
      "durability": 8,
      "utility": 7,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "skud",
    "name": "Skud",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Easy",
    "tier": "B",
    "lore": "Skud is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 6,
      "durability": 6,
      "utility": 4,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "zuka",
    "name": "Zuka",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "S",
    "lore": "Zuka is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 6,
      "durability": 9,
      "utility": 6,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "kil-groth",
    "name": "Kil'Groth",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Kil'Groth is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 9,
      "durability": 4,
      "utility": 5,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "superman",
    "name": "Superman",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "D",
    "lore": "Superman is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 9,
      "durability": 7,
      "utility": 9,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "wonder-woman",
    "name": "Wonder Woman",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "D",
    "lore": "Wonder Woman is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 6,
      "durability": 7,
      "utility": 5,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "astrid",
    "name": "Astrid",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Medium",
    "tier": "A",
    "lore": "Astrid is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 9,
      "durability": 7,
      "utility": 8,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "omen",
    "name": "Omen",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Easy",
    "tier": "S",
    "lore": "Omen is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 6,
      "durability": 5,
      "utility": 9,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "max",
    "name": "Max",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "S",
    "lore": "Max is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 8,
      "durability": 6,
      "utility": 7,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "rourke",
    "name": "Rourke",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "D",
    "lore": "Rourke is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 5,
      "durability": 9,
      "utility": 9,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "amily",
    "name": "Amily",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Medium",
    "tier": "A",
    "lore": "Amily is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 6,
      "durability": 7,
      "utility": 5,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "riktor",
    "name": "Riktor",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "D",
    "lore": "Riktor is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 9,
      "durability": 9,
      "utility": 8,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "florentino",
    "name": "Florentino",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Medium",
    "tier": "A",
    "lore": "Florentino is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 6,
      "durability": 7,
      "utility": 7,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "veres",
    "name": "Veres",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "D",
    "lore": "Veres is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 4,
      "durability": 9,
      "utility": 4,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "errol",
    "name": "Errol",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "A",
    "lore": "Errol is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 6,
      "durability": 6,
      "utility": 5,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "yena",
    "name": "Yena",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "C",
    "lore": "Yena is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 8,
      "durability": 8,
      "utility": 5,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "qi",
    "name": "Qi",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "C",
    "lore": "Qi is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 4,
      "durability": 9,
      "utility": 6,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "volkath",
    "name": "Volkath",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Volkath is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 8,
      "durability": 6,
      "utility": 7,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "allain",
    "name": "Allain",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "C",
    "lore": "Allain is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 8,
      "durability": 5,
      "utility": 8,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "tachi",
    "name": "Tachi",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "S",
    "lore": "Tachi is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 5,
      "durability": 7,
      "utility": 8,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "yan",
    "name": "Yan",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Medium",
    "tier": "C",
    "lore": "Yan is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 8,
      "durability": 6,
      "utility": 6,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "bijan",
    "name": "Bijan",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "A",
    "lore": "Bijan is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 8,
      "durability": 6,
      "utility": 5,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "biron",
    "name": "Biron",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Medium",
    "tier": "S",
    "lore": "Biron is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 4,
      "durability": 4,
      "utility": 8,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "arduin",
    "name": "Arduin",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Hard",
    "tier": "D",
    "lore": "Arduin is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 6,
      "durability": 5,
      "utility": 9,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "ryoma",
    "name": "Ryoma",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Medium",
    "tier": "S",
    "lore": "Ryoma is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 4,
      "durability": 5,
      "utility": 6,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "charlotte",
    "name": "Charlotte",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Charlotte is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 5,
      "durability": 4,
      "utility": 9,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "tamyn",
    "name": "Tamyn",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Medium",
    "tier": "B",
    "lore": "Tamyn is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 5,
      "durability": 7,
      "utility": 7,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "edras",
    "name": "Edras",
    "title": "Warrior of Athanor",
    "role": "Warrior",
    "difficulty": "Medium",
    "tier": "S",
    "lore": "Edras is a powerful Warrior known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 8,
      "durability": 8,
      "utility": 9,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "DS Lane"
  },
  {
    "id": "butterfly",
    "name": "Butterfly",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Medium",
    "tier": "C",
    "lore": "Butterfly is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 9,
      "durability": 6,
      "utility": 6,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "nakroth",
    "name": "Nakroth",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Hard",
    "tier": "S",
    "lore": "Nakroth is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 6,
      "durability": 8,
      "utility": 6,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "wukong",
    "name": "Wukong",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Hard",
    "tier": "A",
    "lore": "Wukong is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 5,
      "durability": 5,
      "utility": 4,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "kriknak",
    "name": "Kriknak",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Medium",
    "tier": "S",
    "lore": "Kriknak is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 4,
      "durability": 6,
      "utility": 8,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "airi",
    "name": "Airi",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Hard",
    "tier": "A",
    "lore": "Airi is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 7,
      "durability": 5,
      "utility": 5,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "murad",
    "name": "Murad",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Medium",
    "tier": "C",
    "lore": "Murad is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 9,
      "durability": 5,
      "utility": 9,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "zill",
    "name": "Zill",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Medium",
    "tier": "D",
    "lore": "Zill is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 6,
      "durability": 4,
      "utility": 9,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "quillen",
    "name": "Quillen",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Medium",
    "tier": "S",
    "lore": "Quillen is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 8,
      "durability": 5,
      "utility": 9,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "enzo",
    "name": "Enzo",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Medium",
    "tier": "C",
    "lore": "Enzo is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 7,
      "durability": 4,
      "utility": 8,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "keera",
    "name": "Keera",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Hard",
    "tier": "A",
    "lore": "Keera is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 7,
      "durability": 5,
      "utility": 4,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "paine",
    "name": "Paine",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Paine is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 9,
      "durability": 8,
      "utility": 9,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "sinestrea",
    "name": "Sinestrea",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Sinestrea is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 9,
      "durability": 5,
      "utility": 6,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "aoi",
    "name": "Aoi",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Medium",
    "tier": "C",
    "lore": "Aoi is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 9,
      "durability": 9,
      "utility": 7,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "stuart",
    "name": "Stuart",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Medium",
    "tier": "B",
    "lore": "Stuart is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 6,
      "durability": 4,
      "utility": 5,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "kaine",
    "name": "Kaine",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Hard",
    "tier": "C",
    "lore": "Kaine is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 6,
      "durability": 6,
      "utility": 5,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "bolt-baron",
    "name": "Bolt Baron",
    "title": "Assassin of Athanor",
    "role": "Assassin",
    "difficulty": "Medium",
    "tier": "D",
    "lore": "Bolt Baron is a powerful Assassin known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 7,
      "durability": 7,
      "utility": 8,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Jungle"
  },
  {
    "id": "veera",
    "name": "Veera",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Medium",
    "tier": "A",
    "lore": "Veera is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 4,
      "durability": 4,
      "utility": 5,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "krixi",
    "name": "Krixi",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Hard",
    "tier": "S",
    "lore": "Krixi is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 7,
      "durability": 5,
      "utility": 8,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "kahlii",
    "name": "Kahlii",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Medium",
    "tier": "C",
    "lore": "Kahlii is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 8,
      "durability": 4,
      "utility": 4,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "diaochan",
    "name": "Diaochan",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Medium",
    "tier": "S",
    "lore": "Diaochan is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 7,
      "durability": 7,
      "utility": 4,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "azzen-ka",
    "name": "Azzen'Ka",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Medium",
    "tier": "B",
    "lore": "Azzen'Ka is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 5,
      "durability": 8,
      "utility": 5,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "aleister",
    "name": "Aleister",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Hard",
    "tier": "B",
    "lore": "Aleister is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 6,
      "durability": 4,
      "utility": 7,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "natalya",
    "name": "Natalya",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Medium",
    "tier": "B",
    "lore": "Natalya is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 6,
      "durability": 5,
      "utility": 8,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "jinna",
    "name": "Jinna",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Jinna is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 8,
      "durability": 9,
      "utility": 6,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "ilumia",
    "name": "Ilumia",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Easy",
    "tier": "C",
    "lore": "Ilumia is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 7,
      "durability": 4,
      "utility": 6,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "preyta",
    "name": "Preyta",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Easy",
    "tier": "D",
    "lore": "Preyta is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 9,
      "durability": 5,
      "utility": 4,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "raz",
    "name": "Raz",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Raz is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 8,
      "durability": 5,
      "utility": 4,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "lauriel",
    "name": "Lauriel",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Medium",
    "tier": "B",
    "lore": "Lauriel is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 8,
      "durability": 5,
      "utility": 4,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "ignis",
    "name": "Ignis",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Hard",
    "tier": "A",
    "lore": "Ignis is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 4,
      "durability": 9,
      "utility": 8,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "tulen",
    "name": "Tulen",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Medium",
    "tier": "C",
    "lore": "Tulen is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 8,
      "durability": 5,
      "utility": 5,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "liliana",
    "name": "Liliana",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Hard",
    "tier": "B",
    "lore": "Liliana is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 6,
      "durability": 9,
      "utility": 6,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "flash",
    "name": "Flash",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Medium",
    "tier": "D",
    "lore": "Flash is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 7,
      "durability": 8,
      "utility": 9,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "marja",
    "name": "Marja",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Easy",
    "tier": "B",
    "lore": "Marja is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 4,
      "durability": 9,
      "utility": 6,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "d-arcy",
    "name": "D'Arcy",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Easy",
    "tier": "S",
    "lore": "D'Arcy is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 9,
      "durability": 6,
      "utility": 9,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "dirak",
    "name": "Dirak",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Easy",
    "tier": "B",
    "lore": "Dirak is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 9,
      "durability": 8,
      "utility": 7,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "ishar",
    "name": "Ishar",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Hard",
    "tier": "D",
    "lore": "Ishar is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 6,
      "durability": 9,
      "utility": 5,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "zata",
    "name": "Zata",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Hard",
    "tier": "S",
    "lore": "Zata is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 9,
      "durability": 5,
      "utility": 7,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "lorion",
    "name": "Lorion",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Medium",
    "tier": "C",
    "lore": "Lorion is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 4,
      "durability": 7,
      "utility": 7,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "iggy",
    "name": "Iggy",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Hard",
    "tier": "S",
    "lore": "Iggy is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 9,
      "durability": 8,
      "utility": 9,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "yue",
    "name": "Yue",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Hard",
    "tier": "D",
    "lore": "Yue is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 6,
      "durability": 6,
      "utility": 6,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "bonnie",
    "name": "Bonnie",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Medium",
    "tier": "A",
    "lore": "Bonnie is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 4,
      "durability": 9,
      "utility": 6,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "mganga",
    "name": "Mganga",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Easy",
    "tier": "C",
    "lore": "Mganga is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 6,
      "durability": 7,
      "utility": 6,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "heino",
    "name": "Heino",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Hard",
    "tier": "D",
    "lore": "Heino is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 9,
      "durability": 5,
      "utility": 9,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "goverra",
    "name": "Goverra",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Hard",
    "tier": "B",
    "lore": "Goverra is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 9,
      "durability": 7,
      "utility": 6,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "flowborn-(mage)",
    "name": "Flowborn (Mage)",
    "title": "Mage of Athanor",
    "role": "Mage",
    "difficulty": "Easy",
    "tier": "D",
    "lore": "Flowborn (Mage) is a powerful Mage known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 8,
      "durability": 6,
      "utility": 6,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Mid Lane"
  },
  {
    "id": "valhein",
    "name": "Valhein",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Easy",
    "tier": "D",
    "lore": "Valhein is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 5,
      "durability": 4,
      "utility": 6,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "violet",
    "name": "Violet",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Hard",
    "tier": "C",
    "lore": "Violet is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 7,
      "durability": 8,
      "utility": 4,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "yorn",
    "name": "Yorn",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Easy",
    "tier": "C",
    "lore": "Yorn is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 7,
      "durability": 5,
      "utility": 4,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "fennik",
    "name": "Fennik",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Hard",
    "tier": "A",
    "lore": "Fennik is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 5,
      "durability": 8,
      "utility": 6,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "slimz",
    "name": "Slimz",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Medium",
    "tier": "A",
    "lore": "Slimz is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 4,
      "durability": 9,
      "utility": 4,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "tel-annas",
    "name": "Tel'Annas",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Easy",
    "tier": "D",
    "lore": "Tel'Annas is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 6,
      "durability": 6,
      "utility": 5,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "moren",
    "name": "Moren",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Medium",
    "tier": "S",
    "lore": "Moren is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 4,
      "durability": 5,
      "utility": 8,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "lindis",
    "name": "Lindis",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Hard",
    "tier": "D",
    "lore": "Lindis is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 7,
      "durability": 8,
      "utility": 6,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "wisp",
    "name": "Wisp",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Medium",
    "tier": "D",
    "lore": "Wisp is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 7,
      "durability": 4,
      "utility": 8,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "elsu",
    "name": "Elsu",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Medium",
    "tier": "C",
    "lore": "Elsu is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 6,
      "durability": 7,
      "utility": 5,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "hayate",
    "name": "Hayate",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Hard",
    "tier": "C",
    "lore": "Hayate is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 5,
      "durability": 5,
      "utility": 9,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "capheny",
    "name": "Capheny",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Hard",
    "tier": "D",
    "lore": "Capheny is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 5,
      "durability": 8,
      "utility": 7,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "eland-orr",
    "name": "Eland'orr",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Eland'orr is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 7,
      "durability": 5,
      "utility": 5,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "laville",
    "name": "Laville",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Laville is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 8,
      "durability": 6,
      "utility": 8,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "thorne",
    "name": "Thorne",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Medium",
    "tier": "D",
    "lore": "Thorne is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 6,
      "durability": 8,
      "utility": 5,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "bright",
    "name": "Bright",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Medium",
    "tier": "A",
    "lore": "Bright is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 9,
      "mobility": 8,
      "durability": 9,
      "utility": 7,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "celica",
    "name": "Celica",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Celica is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 7,
      "durability": 8,
      "utility": 4,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "teeri",
    "name": "Teeri",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Hard",
    "tier": "S",
    "lore": "Teeri is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 8,
      "durability": 6,
      "utility": 7,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "erin",
    "name": "Erin",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Medium",
    "tier": "D",
    "lore": "Erin is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 8,
      "durability": 9,
      "utility": 7,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "flowborn-(marksman)",
    "name": "Flowborn (Marksman)",
    "title": "Marksman of Athanor",
    "role": "Marksman",
    "difficulty": "Hard",
    "tier": "B",
    "lore": "Flowborn (Marksman) is a powerful Marksman known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 8,
      "durability": 6,
      "utility": 7,
      "difficulty": 9
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "ADC"
  },
  {
    "id": "alice",
    "name": "Alice",
    "title": "Support of Athanor",
    "role": "Support",
    "difficulty": "Easy",
    "tier": "S",
    "lore": "Alice is a powerful Support known throughout Athanor.",
    "stats": {
      "damage": 8,
      "mobility": 8,
      "durability": 9,
      "utility": 5,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "helen",
    "name": "Helen",
    "title": "Support of Athanor",
    "role": "Support",
    "difficulty": "Medium",
    "tier": "S",
    "lore": "Helen is a powerful Support known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 8,
      "durability": 8,
      "utility": 7,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "annette",
    "name": "Annette",
    "title": "Support of Athanor",
    "role": "Support",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Annette is a powerful Support known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 8,
      "durability": 8,
      "utility": 5,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "sephera",
    "name": "Sephera",
    "title": "Support of Athanor",
    "role": "Support",
    "difficulty": "Hard",
    "tier": "S",
    "lore": "Sephera is a powerful Support known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 7,
      "durability": 4,
      "utility": 9,
      "difficulty": 8
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "krizzix",
    "name": "Krizzix",
    "title": "Support of Athanor",
    "role": "Support",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Krizzix is a powerful Support known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 8,
      "durability": 6,
      "utility": 8,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "rouie",
    "name": "Rouie",
    "title": "Support of Athanor",
    "role": "Support",
    "difficulty": "Hard",
    "tier": "C",
    "lore": "Rouie is a powerful Support known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 9,
      "durability": 7,
      "utility": 5,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "zip",
    "name": "Zip",
    "title": "Support of Athanor",
    "role": "Support",
    "difficulty": "Easy",
    "tier": "A",
    "lore": "Zip is a powerful Support known throughout Athanor.",
    "stats": {
      "damage": 4,
      "mobility": 7,
      "durability": 4,
      "utility": 8,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "aya",
    "name": "Aya",
    "title": "Support of Athanor",
    "role": "Support",
    "difficulty": "Medium",
    "tier": "A",
    "lore": "Aya is a powerful Support known throughout Athanor.",
    "stats": {
      "damage": 7,
      "mobility": 5,
      "durability": 9,
      "utility": 5,
      "difficulty": 5
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "ming",
    "name": "Ming",
    "title": "Support of Athanor",
    "role": "Support",
    "difficulty": "Easy",
    "tier": "B",
    "lore": "Ming is a powerful Support known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 8,
      "durability": 9,
      "utility": 7,
      "difficulty": 6
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "dolia",
    "name": "Dolia",
    "title": "Support of Athanor",
    "role": "Support",
    "difficulty": "Hard",
    "tier": "B",
    "lore": "Dolia is a powerful Support known throughout Athanor.",
    "stats": {
      "damage": 6,
      "mobility": 9,
      "durability": 9,
      "utility": 5,
      "difficulty": 4
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  },
  {
    "id": "dyadia",
    "name": "Dyadia",
    "title": "Support of Athanor",
    "role": "Support",
    "difficulty": "Medium",
    "tier": "S",
    "lore": "Dyadia is a powerful Support known throughout Athanor.",
    "stats": {
      "damage": 5,
      "mobility": 8,
      "durability": 9,
      "utility": 6,
      "difficulty": 7
    },
    "abilities": [
      {
        "name": "Passive: Inner Strength",
        "description": "Enhances basic attacks.",
        "cooldown": "0s",
        "manaCost": "0"
      },
      {
        "name": "Skill 1: Strike",
        "description": "Deals damage to enemies in front.",
        "cooldown": "6s",
        "manaCost": "50"
      },
      {
        "name": "Skill 2: Dash",
        "description": "Dashes forward, gaining a shield.",
        "cooldown": "8s",
        "manaCost": "60"
      },
      {
        "name": "Ultimate: Execution",
        "description": "Deals massive true damage to a target.",
        "cooldown": "30s",
        "manaCost": "100"
      }
    ],
    "tips": [
      "Play safe early game.",
      "Look for flanking opportunities."
    ],
    "counters": [
      "Hard CC",
      "Burst Damage"
    ],
    "synergies": [
      "AoE CC",
      "Healers"
    ],
    "lane": "Support"
  }
];

export const ROLES = ["Warrior", "Assassin", "Mage", "Marksman", "Support", "Tank"] as const;
export const TIERS = ["S", "A", "B", "C", "D"] as const;
export const getHeroById = (id: string) => heroes.find((h) => h.id === id);
