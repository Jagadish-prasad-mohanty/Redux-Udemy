import * as actionType from './actionTypes';
//action creqators
const storeUpdate = (counterResult) =>{
    return {
        type:actionType.UPDATE,
        counterResult:counterResult
    }
}
const update = (counterResult) =>{
    return (dispatch,getState)=>{
        setTimeout(() => {
            const oldCounter=getState().ctr.counter;
            console.log(oldCounter);
            dispatch(storeUpdate(counterResult));
        }, 2000);
    }
} 
const del = (id) =>{
    return {
        type:actionType.DELETE,
        deleted:id
    }
}
export {update,del}