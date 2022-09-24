export const initialState: RootState = {
    rootState: undefined,
    stats: {
        damage: 0,
        armor: 0,
    },
    items: [
        { name: 'Sharp Sword', slot: 'main hand', damage: 10, armor: 0, inUse: false },
        { name: 'Rusty Mace', slot: 'main hand', damage: 8, armor: 0, inUse: false },
        { name: 'Broken Shield', slot: 'off hand', damage: 0, armor: 15, inUse: false },
        { name: 'Cloth Helmet', slot: 'head', damage: 0, armor: 10, inUse: false },
        { name: 'Cloth Chest', slot: 'chest', damage: 0, armor: 10, inUse: false },
        { name: 'Cloth Leggings', slot: 'leg', damage: 0, armor: 8, inUse: false },
        { name: 'Cloth Gloves', slot: 'hand', damage: 0, armor: 2, inUse: false },
        { name: 'Cloth Boots', slot: 'feet', damage: 0, armor: 2, inUse: false },
    ]
}

export type RootState = {
    rootState?: any;
    stats: Stats;
    items: ItemTypes;
}

export type ItemTypes = { name: string, slot: string, damage: number, armor: number, inUse: boolean }[];

export type Stats = {
    life?: number;
    damage?: number;
    armor?: number;
}

export type Inventory = {
    name?: string;
    slot?: string;
    damage?: number;
    armor?: number;
    inUse?: boolean;
}


type ITEM_NAME = { name: string; };
type ITEM_SLOT = { slot: string; };
type ITEM_DAMAGE = { damage: number; };
type ITEM_ARMOR = { armor: number; };
type ITEM_INUSE = { inUse: boolean; };