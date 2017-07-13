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
        case "GET_ADDRESS":
            const currentAddresses = [...state.addresses]
            const addressToSelectId = currentAddresses.findIndex(
                function(address){
                    return address.id === action.payload
                }
            )
            return {...state, address:currentAddresses[addressToSelectId]}
            break;
        case "POST_ADDRESS":
            return {...state, msg:'Saved! Click to continue', style:'success', validation:[]}
            break;
        case "POST_ADDRESS_REJECTED":
            return {...state, msg:action.payload.msg, style:'danger', validation:action.payload.validation}
            break;
        case "PUT_ADDRESS_REJECTED":
            return {...state, msg:'Product cannot be updated', style:'danger', validation:[]}
            break;
        case "DELETE_ADDRESS":
            return {...state, msg:'Address deleted', style:'success', validation:[]}
            break;
        case "DELETE_ADDRESS_REJECTED":
            return {...state, msg:'Address cannot be deleted', style:'danger', validation:[]}
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

            return {addresses: [...currentAddressToUpdate.slice(0, indexToUpdate), newAddressToUpdate, ...currentAddressToUpdate.slice(indexToUpdate + 1)]}
            break;
    }
    return state
}
