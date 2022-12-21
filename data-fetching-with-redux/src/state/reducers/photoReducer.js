import { ADD_VALUE, FETCH_PHOTO_ERROR, FETCH_PHOTO_LOADING, FETCH_PHOTO_SUCCESS,DECREASE_VALUE } from "../action-types/action-types";

const initial_state = {
    loading: true,
    data: [],
    error: '',
    num: 1
}
export const photoReducer = (state = initial_state, action) => {
    switch (action.type) {
         case ADD_VALUE:{return {...state,num:state.num+1}}
         case DECREASE_VALUE:{return {...state,num:state.num-1}}
         case FETCH_PHOTO_LOADING:return {...state,loading:true}
         case FETCH_PHOTO_SUCCESS:return{...state,loading:false,error:'',data:action.payload}
         case FETCH_PHOTO_ERROR:return {...state,loading:false,error:action.payload,data:[]}
         default: return state
    }
}