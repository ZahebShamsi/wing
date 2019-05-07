import loginReducer  from './login/loginReducer';
import productsReducer from './products/productsReducer';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    sessionData: loginReducer,
    productsData   : productsReducer
});

export default rootReducer;