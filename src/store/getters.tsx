// Global Gets
export const getStore = (store: any) => store;
export const getRootState = (store: any) => store.reducer.rootState;

// Player gets
export const getItems = (store: any) => store.reducer.playerState.items;
export const getPlayerState = (store: any) => store.reducer.playerState;
export const getPlayerStats = (store: any) => store.reducer.playerState.stats;
export const getPlayerBaseStats = (store: any) =>
  store.reducer.playerState.baseStats;

// Monster gets
export const getMonsterState = (store: any) => store.reducer.monsterState;

export const getTest = () => {
  console.log(Storage);
  // return Storage.reducer.monsterState;
};
