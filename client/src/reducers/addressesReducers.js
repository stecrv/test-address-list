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
            return {...state, address:currentAddresses[addressToSelectId], clear:false}
            break;
        case "POST_ADDRESS":
            return {...state, msg:'Saved! Click to continue', style:'success', validation:[], clear:true}
            break;
        case "POST_ADDRESS_REJECTED":
            return {...state, msg:action.payload.msg, style:'danger', validation:action.payload.validation,clear:false}
            break;
        case "DELETE_ADDRESS":
            return {...state, msg:'Address deleted', style:'success', validation:[], clear:true}
            break;
        case "DELETE_ADDRESS_REJECTED":
            return {...state, msg:'Address cannot be deleted', style:'danger', validation:[],clear:false}
            break;
        case "UPDATE_ADDRESS":
            return {...state, address: null, msg:'Updated! Click to continue',
                style:'success', validation:[], clear:true}
            break;
        case "UPDATE_ADDRESS_REJECTED":
            return {...state, msg:'Product cannot be updated', style:'danger', validation:[],clear:false}
            break;
        case "RESET_DATA":
            return {...state, address: null, msg:null, style:null, validation:[], clear:true}

    }
    return state
}
