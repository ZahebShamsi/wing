import signInActionCreator from './loginActionCreators';

let intialState = {
    isAuthenticated: false
}
function loginReducer(state = intialState, action){
  switch (action.type) {
    case "LOGIN_AUTH_SUCCESS":
        return {
            ...state , isAuthenticated : action.payload
        }
    default :
        return state;     
  }
}


export default loginReducer;
