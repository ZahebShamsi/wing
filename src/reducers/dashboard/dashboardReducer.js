import dashboardActionCreator from './dashboardActionCreator';

let initialState = {
    cartItems : [],
    totalInvoice : 0
}

function dashboardReducer (state = initialState , action){
    switch (action.type){
        case "ADDTOCART_DATA" :
            let totalPrice = 0;
            action.payload.forEach((item) => { 
                                    totalPrice +=item.price * item.quantity;
                                    })
            return {
                cartItems : action.payload,
                totalInvoice : totalPrice
            }
        default:
            return state;
        }
     
     
}

export default dashboardReducer;