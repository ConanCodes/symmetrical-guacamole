import { UPDATE_INVENTORY } from "../actionTypes";
import { initialState } from '../constants'

const reducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_INVENTORY:
            return { ...state, inventory: action.payload }
        default:
            return state;
    }
}

export default reducer;