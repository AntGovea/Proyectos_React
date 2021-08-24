//parte de useReducer 

import { types } from "../types/types";


export const uiReducer =(state =initialState, action)=>{

    switch(action){
        case types.uiOpenModal: 
        return {
                ...state,
                modalOpen:true,
        }
        case types.uiCloseModal: 
        return {
                ...state,
                modalOpen:false,
        }
        default:
            return state;
    }

}