"use strict"
import axios from 'axios';


export function getServerURL(){
    return ''

}

export function getAddresses(){
    return function(dispatch){
        axios.get(getServerURL()+"/addresses")
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
        axios.post(getServerURL()+"/addresses", address)
            .then(function(response){
                dispatch({type:"POST_ADDRESS", payload:response.data})
            })
            .catch(function(err){
                dispatch({type:"POST_ADDRESS_REJECTED", payload:"there was an error while posting "})
            })
    }
}


export function deleteAddresses(id){
    return function(dispatch){
        axios.delete(getServerURL()+"/addresses/" + id)
            .then(function(response){
                dispatch({type:"DELETE_ADDRESS", payload:id})
            })
            .catch(function(err){
                dispatch({type:"DELETE_ADDRESS_REJECTED", payload:err})
            })
    }
}


export function updateAddresses(address){
    return function(dispatch){
        axios.post(getServerURL()+"/addresses/" + address.id, address)
            .then(function(response){
                dispatch({type:"POST_ADDRESS", payload:response.data})
            })
            .catch(function(err){
                dispatch({type:"POST_ADDRESS_REJECTED", payload:"there was an error while updating "})
            })
    }
}
