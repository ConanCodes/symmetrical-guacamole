export const initialState: RootState = {
  rootState: {
    logs: {
      message: [],
      showLog: true,
    },
  },
  playerState: {
    currentPlayerHealth: 100,
    stats: {
      armor: 0,
      life: 0,
      damage: 0,
      bonusLife: 0,
      healAmount: 0,
    },
    baseStats: {
      baseArmor: 0,
      baseLife: 100,
      baseDamage: 10,
      baseBonusLife: 0,
      baseHealAmount: 25,
    },
    items: [
      { name: "Sharp Sword", slot: "main hand", damage: 10, armor: 0 },
      { name: "Rusty Mace", slot: "main hand", damage: 8, armor: 0 },
      { name: "Broken Shield", slot: "off hand", damage: 0, armor: 10 },
      { name: "Cloth Helmet", slot: "head", damage: 0, armor: 6 },
      { name: "Cloth Chest", slot: "chest", damage: 0, armor: 6 },
      { name: "Cloth Leggings", slot: "leg", damage: 0, armor: 4 },
      { name: "Cloth Gloves", slot: "hand", damage: 0, armor: 2 },
      { name: "Cloth Boots", slot: "feet", damage: 0, armor: 2 },
    ],
    inUseItems: [],
  },
  monsterState: {
    armor: 0,
    mLife: 200,
    damage: 25,
    currentMonsterHealth: 200,
  },
  // Functions
  updateItems: undefined,
  resetGame: undefined,
  resetPlayerLife: undefined,
  damagePlayer: undefined,
  damageMonster: undefined,
};

export type RootState = {
  rootState: {
    logs: Logs;
  };
  monsterState: MonsterStats;
  playerState: {
    currentPlayerHealth: number;
    stats: PlayerStats;
    baseStats: PlayerBaseStats;
    items: Item[];
    inUseItems: Item[];
  };
  updateItems: any;
  resetGame: any;
  resetPlayerLife: any;
  damagePlayer: any;
  damageMonster: any;
};

export type PlayerStats = {
  life: number;
  damage: number;
  armor: number;
  bonusLife: number;
  healAmount: number;
};

export type PlayerBaseStats = {
  baseArmor: number;
  baseLife: number;
  baseDamage: number;
  baseBonusLife: number;
  baseHealAmount: number;
};

export type MonsterStats = {
  mLife: number;
  damage: number;
  armor: number;
  currentMonsterHealth: number;
};

export type Item = {
  name: string;
  slot: string;
  damage: number;
  armor: number;
};

export type Logs = {
  message: string[];
  showLog: boolean;
};
