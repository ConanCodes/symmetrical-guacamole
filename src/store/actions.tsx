import { UPDATE_INVENTORY } from "./actionTypes";

const updateInventory = (content: any) => (dispatch: any) => {
    dispatch({ type: UPDATE_INVENTORY, payload: content });
};

export { updateInventory };