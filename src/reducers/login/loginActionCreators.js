
const signInActionCreator = (loginData) => {
    return {
        type : "USER_SIGN_IN" ,
        payload : loginData       
    }
}

export default signInActionCreator;