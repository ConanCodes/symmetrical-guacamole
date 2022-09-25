import {
  UPDATE_ITEMS_USED,
  RESET_GAME,
  DAMAGE_MONSTER,
  DAMAGE_PLAYER,
  RESET_PLAYER_LIFE,
  HEAL_PLAYER,
  HEAL_MONSTER,
} from "../actionTypes";
import { initialState } from "../constants";

const _ = require("lodash");

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_ITEMS_USED: {
      // If an item is in the array unequip it, else add
      let newArray: any[] = [...state.playerState.inUseItems];
      _.includes(newArray, action.payload)
        ? _.pull(newArray, action.payload)
        : newArray.push(action.payload);

      // If we have more than 3 items remove the oldest item equiped
      if (newArray.length > 3) _.pullAt(newArray, 0);

      // get our dmg and armor
      let a: number = 0;
      let d: number = 0;
      newArray.forEach((val: any) => {
        a = a + val.armor;
        d = d + val.damage;
      });

      return {
        ...state,
        playerState: {
          ...state.playerState,
          inUseItems: newArray,
          stats: {
            armor: a,
            damage: d,
          },
        },
      };
    }
    case DAMAGE_MONSTER: {
      return {
        ...state,
        monsterState: {
          ...state.monsterState,
          currentMonsterHealth:
            state.monsterState.currentMonsterHealth - action.payload,
        },
      };
    }
    case DAMAGE_PLAYER: {
      return {
        ...state,
        playerState: {
          ...state.playerState,
          currentPlayerHealth:
            state.playerState.currentPlayerHealth - action.payload,
        },
      };
    }
    case HEAL_PLAYER: {
      return {
        ...state,
        playerState: {
          ...state.playerState,
          currentPlayerHealth:
            state.playerState.currentPlayerHealth + action.payload,
        },
      };
    }
    case HEAL_MONSTER: {
      return {
        ...state,
        playerState: {
          ...state.playerState,
          currentPlayerHealth:
            state.playerState.currentPlayerHealth + action.payload,
        },
      };
    }
    case RESET_PLAYER_LIFE: {
      return {
        ...state,
        playerState: {
          ...state.playerState,
          currentPlayerHealth: state.playerState.baseStats.life,
        },
      };
    }
    case RESET_GAME: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
