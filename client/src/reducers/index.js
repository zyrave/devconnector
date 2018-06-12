import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profieReducer from './profileReducer';

const rootReducer = combineReducers({ auth: authReducer, errors: errorReducer, profile: profieReducer });

export default rootReducer;
