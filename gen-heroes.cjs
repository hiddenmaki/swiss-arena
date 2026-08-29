const fs = require('fs');

const data = {
  Tank: ["Thane", "Mina", "Omega", "Gildur", "Toro", "Taara", "Grakk", "Chaugnar", "Cresht", "Lumburr", "Xeniel", "Teemee", "Arum", "Baldum", "Y'bneth", "Wiro", "Ata", "Dextra", "Roxie", "Billow"],
  Warrior: ["Zephys", "Zanis", "Lu Bu", "Ormarr", "Maloch", "Mortos", "Skud", "Zuka", "Kil'Groth", "Superman", "Wonder Woman", "Astrid", "Omen", "Max", "Rourke", "Amily", "Riktor", "Florentino", "Veres", "Errol", "Yena", "Qi", "Volkath", "Allain", "Tachi", "Yan", "Bijan", "Biron", "Arduin", "Ryoma", "Charlotte", "Tamyn", "Edras"],
  Assassin: ["Butterfly", "Nakroth", "Wukong", "Kriknak", "Airi", "Murad", "Zill", "Quillen", "Enzo", "Keera", "Paine", "Sinestrea", "Aoi", "Stuart", "Kaine", "Bolt Baron"],
  Mage: ["Veera", "Krixi", "Kahlii", "Diaochan", "Azzen'Ka", "Aleister", "Natalya", "Jinna", "Ilumia", "Preyta", "Raz", "Lauriel", "Ignis", "Tulen", "Liliana", "Flash", "Marja", "D'Arcy", "Dirak", "Ishar", "Zata", "Lorion", "Iggy", "Yue", "Bonnie", "Mganga", "Heino", "Goverra", "Flowborn (Mage)"],
  Marksman: ["Valhein", "Violet", "Yorn", "Fennik", "Slimz", "Tel'Annas", "Moren", "Lindis", "Wisp", "Elsu", "Hayate", "Capheny", "Eland'orr", "Laville", "Thorne", "Bright", "Celica", "Teeri", "Erin", "Flowborn (Marksman)"],
  Support: ["Alice", "Helen", "Annette", "Sephera", "Krizzix", "Rouie", "Zip", "Aya", "Ming", "Dolia", "Dyadia"]
};

let heroes = [];
const tiers = ["S", "A", "B", "C", "D"];
const difficulties = ["Easy", "Medium", "Hard"];

for (const [role, list] of Object.entries(data)) {
  for (const name of list) {
    let lane = "Flex";
    if (role === "Tank" || role === "Support") lane = "Support";
    if (role === "Warrior") lane = "DS Lane";
    if (role === "Assassin") lane = "Jungle";
    if (role === "Mage") lane = "Mid Lane";
    if (role === "Marksman") lane = "ADC";
    
    if (name === "Zephys" || name === "Zanis") lane = "Jungle";

    const hero = {
      id: name.toLowerCase().replace(/[' ]/g, '-'),
      name,
      title: `${role} of Athanor`,
      role,
      difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
      tier: tiers[Math.floor(Math.random() * tiers.length)],
      lore: `${name} is a powerful ${role} known throughout Athanor.`,
      stats: {
        damage: Math.floor(Math.random() * 6) + 4,
        mobility: Math.floor(Math.random() * 6) + 4,
        durability: Math.floor(Math.random() * 6) + 4,
        utility: Math.floor(Math.random() * 6) + 4,
        difficulty: Math.floor(Math.random() * 6) + 4,
      },
      abilities: [
        { name: "Passive: Inner Strength", description: "Enhances basic attacks.", cooldown: "0s", manaCost: "0" },
        { name: "Skill 1: Strike", description: "Deals damage to enemies in front.", cooldown: "6s", manaCost: "50" },
        { name: "Skill 2: Dash", description: "Dashes forward, gaining a shield.", cooldown: "8s", manaCost: "60" },
        { name: "Ultimate: Execution", description: "Deals massive true damage to a target.", cooldown: "30s", manaCost: "100" }
      ],
      tips: ["Play safe early game.", "Look for flanking opportunities."],
      counters: ["Hard CC", "Burst Damage"],
      synergies: ["AoE CC", "Healers"],
      lane
    };
    heroes.push(hero);
  }
}

const fileContent = `export type HeroRole = "Warrior" | "Assassin" | "Mage" | "Marksman" | "Support" | "Tank";

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

export const heroes: Hero[] = ${JSON.stringify(heroes, null, 2)};

export const ROLES = ["Warrior", "Assassin", "Mage", "Marksman", "Support", "Tank"] as const;
export const TIERS = ["S", "A", "B", "C", "D"] as const;
export const getHeroById = (id: string) => heroes.find((h) => h.id === id);
`;

fs.writeFileSync('src/data/heroes.ts', fileContent);
console.log("Successfully generated src/data/heroes.ts with " + heroes.length + " heroes.");
