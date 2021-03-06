"use strict"
import axios from 'axios';


export function getRestUrl(){
    return ''

}

export function getAddresses(){
    return function(dispatch){
        axios.get(getRestUrl()+"/addresses")
            .then(function(response){
                dispatch({type:"GET_ADDRESSES", payload:response.data})
            })
            .catch(function(err){
                dispatch({type:"GET_ADDRESSES_REJECTED", payload:err})
            })
    }
}

export function postAddresses(address){

    return function(dispatch){
        axios.post(getRestUrl()+"/addresses", address)
            .then(function(response){
                dispatch({type:"POST_ADDRESS", payload:response.data})
            })
            .then(function(response){
                dispatch(getAddresses());
            })
            .catch(function(error){

                if (error.response) {
                    /*
                    console.log('error.response.data',error.response.data);
                    console.log('error.response.stat',error.response.status);
                    console.log('error.response.head',error.response.headers);
                    */
                    if(error.response.status == 422){
                        dispatch({type:"POST_ADDRESS_REJECTED", payload: {msg:"Validation error",validation:error.response.data}})
                    }else{
                        dispatch({type:"POST_ADDRESS_REJECTED", payload:"there was an error while posting "})
                    }
                } else if (error.request) {
                    console.log('error.request',error.request);
                    dispatch({type:"POST_ADDRESS_REJECTED", payload:"there was an error while posting "})
                } else {
                    console.log('Error', error.message);
                    dispatch({type:"POST_ADDRESS_REJECTED", payload:"there was an error while posting "})
                }
            })
    }
}


export function deleteAddresses(id){
    return function(dispatch){
        axios.delete(getRestUrl()+"/addresses/" + id)
            .then(function(response){
                dispatch({type:"DELETE_ADDRESS", payload:id})
            })
            .then(function(response){
                dispatch(getAddresses());
            })
            .catch(function(err){
                dispatch({type:"DELETE_ADDRESS_REJECTED", payload:err})
            })
    }
}

export function getAddress(id){
    return {type:"GET_ADDRESS", payload:id}
};

export function updateAddresses(address){
    return function(dispatch){
        axios.put(getRestUrl()+"/addresses/" + address.id, address)
            .then(function(response){
                dispatch({type:"UPDATE_ADDRESS", payload:response.data})
            })
            .then(function(response){
                dispatch(getAddresses());
            })
            .catch(function(err){
                dispatch({type:"UPDATE_ADDRESS_REJECTED", payload:"there was an error while updating "})
            })
    }
}

export function resetData(){
    return {
        type:"RESET_DATA"
    }
}
