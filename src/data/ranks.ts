export type RankInfo = {
  id: string;
  name: string;
  tiers?: number;
  tierDetails?: string;
  color: string;
  stars?: string;
};

export const rovRanks: RankInfo[] = [
  {
    id: "bronze",
    name: "Bronze",
    tiers: 3,
    tierDetails: "Bronze III - I",
    color: "from-[#8B5A2B] to-[#CD853F]",
  },
  {
    id: "silver",
    name: "Silver",
    tiers: 3,
    tierDetails: "Silver III - I",
    color: "from-[#A9A9A9] to-[#E0E0E0]",
  },
  {
    id: "gold",
    name: "Gold",
    tiers: 4,
    tierDetails: "Gold IV - I",
    color: "from-[#DAA520] to-[#FFD700]",
  },
  {
    id: "platinum",
    name: "Platinum",
    tiers: 5,
    tierDetails: "Platinum V - I",
    color: "from-[#4682B4] to-[#00CED1]",
  },
  {
    id: "diamond",
    name: "Diamond",
    tiers: 5,
    tierDetails: "Diamond V - I",
    color: "from-[#9370DB] to-[#DDA0DD]",
  },
  {
    id: "veteran",
    name: "Commander",
    tiers: 5,
    tierDetails: "Commander V - I",
    color: "from-[#B22222] to-[#FF6347]",
  },
  {
    id: "master",
    name: "Conqueror",
    stars: "0-49 Stars",
    color: "from-[#800000] to-[#FF4500]",
  },
  {
    id: "supreme",
    name: "Supreme Conqueror",
    stars: "50+ Stars",
    color: "from-[#FFD700] via-[#FF8C00] to-[#DC143C]",
  },
  {
    id: "immortal",
    name: "Immortal",
    stars: "100+ Stars",
    color: "from-[#8A2BE2] via-[#4B0082] to-[#000000]",
  },
  {
    id: "glorious-ruler",
    name: "Glorious Ruler",
    stars: "Top 50 Server",
    color: "from-[#FFDF00] via-[#D4AF37] to-[#B8860B]",
  },
];
