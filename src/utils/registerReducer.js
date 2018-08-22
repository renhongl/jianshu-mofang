


import { combineReducers } from 'redux';

import { reducer as auth } from '../services/auth';
import { reducer as header } from '../services/header';


export const reducer  = combineReducers({
    auth,
    header
});