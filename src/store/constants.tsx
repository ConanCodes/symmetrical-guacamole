export const initialState: RootState = {
  rootState: undefined,
  stats: {
    armor: 0,
    life: 0,
    damage: 0,
  },
  baseStats: {
    armor: 0,
    life: 100,
    damage: 15,
  },
  items: [
    { name: "Sharp Sword", slot: "main hand", damage: 10, armor: 0 },
    { name: "Rusty Mace", slot: "main hand", damage: 8, armor: 0 },
    { name: "Broken Shield", slot: "off hand", damage: 0, armor: 15 },
    { name: "Cloth Helmet", slot: "head", damage: 0, armor: 10 },
    { name: "Cloth Chest", slot: "chest", damage: 0, armor: 10 },
    { name: "Cloth Leggings", slot: "leg", damage: 0, armor: 8 },
    { name: "Cloth Gloves", slot: "hand", damage: 0, armor: 2 },
    { name: "Cloth Boots", slot: "feet", damage: 0, armor: 2 },
  ],
  inUseItems: [],
  updateInventory: undefined,
};

export type RootState = {
  rootState: any;
  stats: PlayerStats;
  baseStats: PlayerStats;
  items: Item[];
  updateInventory: any;
  inUseItems: Item[];
};

export type Item = {
  name: string;
  slot: string;
  damage: number;
  armor: number;
};

export type PlayerStats = {
  life: number;
  damage: number;
  armor: number;
};

export type MonsterFighterState = {
  bonusLifeEl: number;
  ATTACK_VALUE: number;
  STRONG_ATTACK_VALUE: number;
  MONSTER_ATTACK_VALUE: number;
  HEAL_VALUE: number;
  chosenMaxLife: number;
  currentMonsterHealth: number;
  currentPlayerHealth: number;
  hasBonusLife: boolean;
  log: string[];
  showLog: boolean;
  itemsEquipped: string[];
};

type ITEM_NAME = { name: string };
type ITEM_SLOT = { slot: string };
type ITEM_DAMAGE = { damage: number };
type ITEM_ARMOR = { armor: number };
type ITEM_INUSE = { inUse: boolean };
