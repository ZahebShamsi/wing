
import productsActionCreator from './productsActionCreator';

let initialState = {
  products: []
}
function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_QUANTITY":
      let products = state.products.map((product) => {
        if (product.name == action.payload) {
          product.quantity++;
          return product
        }
        return product
      })
      return { products: products };

    case "DECREMENT_QUANTITY":
      let productsData = state.products.map((productdata) => {
        if (productdata.name == action.payload) {
            productdata.quantity--;
            return productdata
        }
        return productdata
      })
      return { products: productsData };
    
    case "PRODUCT_DATA_REQUEST_SUCCESS" :
      return {
        products : action.payload.data
      }   


    default:
      return state;
  }
}
export default productsReducer;