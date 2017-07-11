"use strict"
//ADDRESSES REDUCERS
export function addressesReducers(state={
    addresses:[]
}, action){
    switch(action.type){
        case "GET_ADDRESSES":
            // let addresses = state.addresses.concat(action.payload);
            // return {addresses};
            return {...state, addresses:[...action.payload]}
            break;
        case "POST_ADDRESS":
            return {...state, msg:'Saved! Click to continue', style:'success', validation:'success'}
            break;
        case "POST_ADDRESS_REJECTED":
            return {...state, msg:'Please, try again', style:'danger', validation:'error'}
            break;
        case "DELETE_ADDRESS":
            const currentAddressToDelete = [...state.addresses]
            const indexToDelete = currentAddressToDelete.findIndex(
                function(address){
                    return address._id == action.payload;
                }
            )
            return {addresses: [...currentAddressToDelete.slice(0, indexToDelete), ...currentAddressToDelete.slice(indexToDelete + 1)]}
            break;

        case "UPDATE_ADDRESS":
            const currentAddressToUpdate = [...state.addresses]
            const indexToUpdate = currentAddressToUpdate.findIndex(
                function(address){
                    return address._id === action.payload._id;
                }
            )
            const newAddressToUpdate = {
                ...currentAddressToUpdate[indexToUpdate],
                title: action.payload.title
            }
            console.log("what is it newAddressToUpdate", newAddressToUpdate);
            return {addresses: [...currentAddressToUpdate.slice(0, indexToUpdate), newAddressToUpdate, ...currentAddressToUpdate.slice(indexToUpdate + 1)]}
            break;
    }
    return state
}
