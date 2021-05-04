import {React} from 'react';
import * as actions from '../actions/actionTypes';
import {utility} from '../Utility';
const initialState= {
    counter:0
}

const reducer= (state=initialState,action) =>{
    switch (action.type) {
        
    case actions.INCREMENT:
        const newState=Object.assign({},state);
        newState.counter=state.counter+1
        return newState;
    
    case actions.DECREMENT:
        return utility(state,{counter:state.counter-1});
    
    case actions.ADD_INC:
        return utility(state,{counter:state.counter+action.value});
    
    case actions.SUB_DEC:
        return utility(state,{counter:state.counter-action.value});
    }
    return state;
}

export default reducer;