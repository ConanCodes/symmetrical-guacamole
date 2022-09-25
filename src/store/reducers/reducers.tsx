import { UPDATE_ITEMS_USED } from "../actionTypes";
import { initialState } from "../constants";

const _ = require("lodash");

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_ITEMS_USED: {
      // If an item is in the array unequip it, else add
      let newArray: any[] = [...state.inUseItems];
      _.includes(newArray, action.payload)
        ? _.pull(newArray, action.payload)
        : newArray.push(action.payload);

      // If we have more than 3 items remove the oldest item equiped
      if (newArray.length > 3) _.pullAt(newArray, 0);

      // get our dmg and armor
      let a: number = state.baseStats.armor;
      let d: number = state.baseStats.damage;
      newArray.forEach((val: any) => {
        a = a + val.armor;
        d = d + val.damage;
      });

      return {
        ...state,
        inUseItems: newArray,
        stats: {
          armor: a,
          damage: d,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
