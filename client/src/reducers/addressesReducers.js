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
            return {...state, addresses:[...state.addresses, ...action.payload], msg:'Saved! Click to continue', style:'success', validation:'success'}
            break;
        case "POST_ADDRESS_REJECTED":
            return {...state, msg:'Please, try again', style:'danger', validation:'error'}
            break;
        case "RESET_BUTTON":
            return {...state, msg:null, style:'primary', validation:null}
            break;
        case "DELETE_ADDRESS":
            // Create a copy of the current array of addresses
            const currentAddressToDelete = [...state.addresses]
            // Determine at which index in addresses array is the address to be deleted
            const indexToDelete = currentAddressToDelete.findIndex(
                function(address){
                    return address._id == action.payload;
                }
            )
            //use slice to remove the address at the specified index
            return {addresses: [...currentAddressToDelete.slice(0, indexToDelete), ...currentAddressToDelete.slice(indexToDelete + 1)]}
            break;

        case "UPDATE_ADDRESS":
            // Create a copy of the current array of addresses
            const currentAddressToUpdate = [...state.addresses]
            // Determine at which index in addresses array is the address to be deleted
            const indexToUpdate = currentAddressToUpdate.findIndex(
                function(address){
                    return address._id === action.payload._id;
                }
            )
            // Create a new address object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methos too
            const newAddressToUpdate = {
                ...currentAddressToUpdate[indexToUpdate],
                title: action.payload.title
            }
            // This Log has the purpose to show you how newAddressToUpdate looks like
            console.log("what is it newAddressToUpdate", newAddressToUpdate);
            //use slice to remove the address at the specified index, replace with the new object and concatenate witht he rest of items in the array
            return {addresses: [...currentAddressToUpdate.slice(0, indexToUpdate), newAddressToUpdate, ...currentAddressToUpdate.slice(indexToUpdate + 1)]}
            break;
    }
    return state
}
