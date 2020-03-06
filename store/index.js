import React, {Component} from "react";
import {createStore} from "redux";

import reducer from './reducers/simple'

// create a store creator
const makeStore  = (initialState) => {
    return createStore(reducer, initialState);
};

export default makeStore;