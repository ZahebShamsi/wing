

export const  qIncrementActionCreator = (productName) => {
    return {
        
        type : "INCREMENT_QUANTITY" ,
        payload : productName  
     } 
    }

export const qDecrementActionCreator = (productName) => {
    return {
            
        type : "DECREMENT_QUANTITY" ,
            payload : productName  
         } 
        }
