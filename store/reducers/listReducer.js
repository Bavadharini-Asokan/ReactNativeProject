import { SET_LISTS, SET_LIST_ID } from "../type";

const initialState = {
    lists: [],
    listId: ''
};

const listReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_LISTS:
            return{
                ...state,
                lists: action.payload,
            };
        case SET_LIST_ID:
            return{
                ...state,
                listId: action.payload
            }
            default:
                return state;
    }
};

export default listReducer;