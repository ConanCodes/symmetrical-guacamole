export const getStore = (store: any) => store;

export const getItems = (store: any) => store.reducer.items;
export const getStats = (store: any) => store.reducer.stats;
export const getRootState = (store: any) => store.reducer.rootState;
