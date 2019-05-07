import signInActionCreator from './loginActionCreators';

let intialState = {
    isAuthenticated: false
}
function loginReducer(state = intialState, action){
  switch (action.type) {
    case "USER_SIGN_IN" :
        return {...state, isAuthenticated:true , sessionData: action.payload}
    default :
        return state;     
  }
}


export default loginReducer;
