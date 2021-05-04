export const utility= (oldState,newProperties)=>{
    return {
        ...oldState,
        ...newProperties
    }
}