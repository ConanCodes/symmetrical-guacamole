import { UPDATE_ITEMS_USED } from "./actionTypes";

const updateInventory = (content: any) => (dispatch: any) => {
  dispatch({ type: UPDATE_ITEMS_USED, payload: content });
};

export { updateInventory };
