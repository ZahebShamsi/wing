
import productsActionCreator from './productsActionCreator';

let initialState = {
  products: [
    { "name": "Maths", "price": 40, "quantity": 0 },
    { "name": "Physics", "price": 60, "quantity": 0 },
    { "name": "Chemistry", "price": 70, "quantity": 0 },
    { "name": "Biology", "price": 85, "quantity": 0 },
    { "name": "English", "price": 37, "quantity": 0 },
  ]
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

    default:
      return state;
  }
}
export default productsReducer;