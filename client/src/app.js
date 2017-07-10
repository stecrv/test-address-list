"use strict"

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers/index';
import {postAddresses, deleteAddresses, updateAddresses} from './actions/adressesActions';

//  1 create the store
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

import AddressesList from './components/pages/addressesList';

render(
    <Provider store={store}>
        <AddressesList/>
    </Provider>,
    document.getElementById('app')
);