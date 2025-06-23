export const mockComps = [
  {
    id: 1,
    title: "تركيبة السحرة (Arcanist)",
    tier: "S",
    synergies: ["Arcanist", "Scholar", "Enchanter"],
    champions: [
      { id: "vex", name: "Vex", cost: 3 },
      { id: "lux", name: "Lux", cost: 4 },
      { id: "viktor", name: "Viktor", cost: 5 },
      { id: "janna", name: "Janna", cost: 4 },
      { id: "yuumi", name: "Yuumi", cost: 5 },
      { id: "swain", name: "Swain", cost: 2 },
      { id: "ziggs", name: "Ziggs", cost: 1 },
    ],
  },
  {
    id: 2,
    title: "تركيبة المتحولين (Chemtech)",
    tier: "A",
    synergies: ["Chemtech", "Challenger", "Bruiser"],
    champions: [
      { id: "tryndamere", name: "Tryndamere", cost: 4 },
      { id: "zac", name: "Zac", cost: 4 },
      { id: "dr_mundo", name: "Dr. Mundo", cost: 4 },
      { id: "warwick", name: "Warwick", cost: 2 },
      { id: "quinn", name: "Quinn", cost: 2 },
      { id: "lissandra", name: "Lissandra", cost: 3 },
    ],
  },
];

export const mockChampions = [
  {
    id: "ahri",
    name: "Ahri",
    title: "The Nine-Tailed Fox",
    cost: 4,
    traits: ["K/DA", "Spellweaver"],
    imageUrl: "/images/champions/ahri.png", // Placeholder path
  },
  {
    id: "yasuo",
    name: "Yasuo",
    title: "The Unforgiven",
    cost: 3,
    traits: ["True Damage", "Edgelord"],
    imageUrl: "/images/champions/yasuo.png", // Placeholder path
  },
  {
    id: "jinx",
    name: "Jinx",
    title: "The Loose Cannon",
    cost: 5,
    traits: ["Punk", "Rapidfire"],
    imageUrl: "/images/champions/jinx.png", // Placeholder path
  },
];

export const mockItems = [
  // Basic Items
  {
    id: "bf_sword",
    name: "B.F. Sword",
    description: "+10 Attack Damage.",
    type: "basic",
    imageUrl: "/images/items/bf_sword.png",
  },
  {
    id: "recurve_bow",
    name: "Recurve Bow",
    description: "+10% Attack Speed.",
    type: "basic",
    imageUrl: "/images/items/recurve_bow.png",
  },
  {
    id: "chain_vest",
    name: "Chain Vest",
    description: "+20 Armor.",
    type: "basic",
    imageUrl: "/images/items/chain_vest.png",
  },
  // Combined Items
  {
    id: "infinity_edge",
    name: "Infinity Edge",
    description: "Grants 75% Critical Strike Chance and 10% Critical Strike Damage. Each 1% of Critical Strike Chance above 100% becomes +1% Critical Strike Damage.",
    type: "combined",
    recipe: ["bf_sword", "bf_sword"],
    imageUrl: "/images/items/infinity_edge.png",
  },
  {
    id: "rapid_firecannon",
    name: "Rapid Firecannon",
    description: "Grants 2 additional Attack Range and 55% bonus Attack Speed.",
    type: "combined",
    recipe: ["recurve_bow", "recurve_bow"],
    imageUrl: "/images/items/rapid_firecannon.png",
  },
];

export const mockNews = [
  {
    id: 1,
    title: "تحليل باتش 14.12: تغييرات كبيرة قادمة!",
    excerpt: "نظرة عميقة على التغييرات القادمة في الباتش الجديد، من سيهيمن على الميتا ومن سيختفي؟",
    author: "أحمد المحلل",
    date: "2024-06-20",
    imageUrl: "/images/news/patch_14_12.png",
  },
  {
    id: 2,
    title: "أفضل 5 تركيبات للوصول إلى تشالنجر",
    excerpt: "هل تحلم بالوصول إلى أعلى الرتب؟ هذه هي التركيبات التي ستساعدك على تحقيق حلمك في الباتش الحالي.",
    author: "سارة الخبيرة",
    date: "2024-06-18",
    imageUrl: "/images/news/top_5_comps.png",
  },
]; 