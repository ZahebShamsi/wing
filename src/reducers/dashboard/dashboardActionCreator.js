
export const dashboardActionCreator = (selectedQuantity) => {
    return {
        type : "ADDTOCART_DATA",
        payload : selectedQuantity
    }
}