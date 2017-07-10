"use strict"
import {combineReducers} from 'redux';

// HERE IMPORT REDUCERS TO BE COMBINED
import {addressesReducers} from './addressesReducers';

//HERE COMBINE THE REDUCERS
export default combineReducers({
    addresses: addressesReducers
})
