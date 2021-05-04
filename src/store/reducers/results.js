import {React} from 'react';
import * as actions from '../actions/actionTypes';
import {utility} from '../Utility';
const initialState= {
    resultSet:[]
}

const deleteObject =(state,action)=>{
    const resultSet=state.resultSet.filter(res=>res.id!==action.deleteId)
    return utility(state,{resultSet:resultSet})
}

const reducer= (state=initialState,action) =>{
    switch (action.type) {
        case actions.UPDATE:
            return utility(state,{resultSet:state.resultSet.concat({id:new Date().getTime(),value: action.counterResult*2})});
        
        case actions.DELETE:
            return deleteObject(state,action);
    }
    return state;
}

export default reducer;