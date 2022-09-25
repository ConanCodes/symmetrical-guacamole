import {
  UPDATE_ITEMS_USED,
  RESET_GAME,
  DAMAGE_MONSTER,
  DAMAGE_PLAYER,
  RESET_PLAYER_LIFE,
  HEAL_PLAYER,
  HEAL_MONSTER,
} from "./actionTypes";

// App
export const resetGame = () => (dispatch: any) => {
  dispatch({ type: RESET_GAME, payload: null });
};

// Player
export const updateItems = (content: any) => (dispatch: any) => {
  dispatch({ type: UPDATE_ITEMS_USED, payload: content });
};
export const damagePlayer = (content: number) => (dispatch: any) => {
  dispatch({ type: DAMAGE_PLAYER, payload: content });
};
export const healPlayer = (content: number) => (dispatch: any) => {
  dispatch({ type: HEAL_PLAYER, payload: content });
};
export const resetPlayerLife = () => (dispatch: any) => {
  dispatch({ type: RESET_PLAYER_LIFE, payload: null });
};

// Monster
export const damageMonster = (content: number) => (dispatch: any) => {
  dispatch({ type: DAMAGE_MONSTER, payload: content });
};
export const healMonster = (content: number) => (dispatch: any) => {
  dispatch({ type: HEAL_MONSTER, payload: content });
};
