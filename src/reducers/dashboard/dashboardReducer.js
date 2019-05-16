import dashboardActionCreator from './dashboardActionCreator';

let initialState = {
    cartItems : [],
    totalInvoice : 0,
    
}

function dashboardReducer (state = initialState , action){
    switch (action.type){
        case "LOAD_CART_DATA_SUCCESS":
            let totalPrice = 0;
            action.payload.forEach((element) => {
                totalPrice += element.price * element.quantity;
            });
            return {
                cartItems : action.payload,
                totalInvoice : totalPrice
            }
                
        default:
            return state;
        }
 
        
}

export default dashboardReducer;