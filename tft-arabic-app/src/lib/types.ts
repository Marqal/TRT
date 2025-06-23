// A single source of truth for our data types

export interface Champion {
  id: string;
  name: string;
  tier?: number;
  cost?: number;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  traits: string[];
  stats?: {
    health: number;
    mana: number;
    armor: number;
    magicResist: number;
    damage: number;
    hp: number;
    attackSpeed: number;
    critChance?: number; // Optional as not all have it
    critMultiplier?: number; // Optional
    range: number;
  };
  ability?: {
    name: string;
    desc: string;
    icon: string;
  };
}

export interface Trait {
  name: string;
  apiName: string;
  desc: string;
  effects: {
    minUnits: number;
    maxUnits: number;
    style: number;
    variables: { [key: string]: number };
  }[];
  icon: string;
}

export interface Item {
  id: string;
  name: string;
  desc: string;
  icon: string;
  from: string[];
  // This will be added manually based on 'from'
  type: 'basic' | 'combined'; 
} 