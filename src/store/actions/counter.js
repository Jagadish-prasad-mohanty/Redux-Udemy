import * as actionType from './actionTypes';

//action creqators
const increment = () =>{
    return {
        type:actionType.INCREMENT
    }
}
const decrement = () =>{
    return {
        type:actionType.DECREMENT
    }
}
const add_inc = (value) =>{
    return {
        type:actionType.ADD_INC,
        value:value
    }
}
const sub_dec = (value) =>{
    return {
        type:actionType.SUB_DEC,
        value:value
    }
}

export {increment,decrement,add_inc,sub_dec};

