const initialState ={
   data: [
        {
          "product_name": "Apple",
          "brand": "Fresh Farms",
          "price": 1.25,
          "quantity": 5,
          "total": 6.25,
          "status": ""
        },
        {
          "product_name": "Milk",
          "brand": "Dairy Delight",
          "price": 2.50,
          "quantity": 2,
          "total": 5.00,
          "status": ""
        },
        {
          "product_name": "Bread",
          "brand": "Baker's Best",
          "price": 2.00,
          "quantity": 3,
          "total": 6.00,
          "status": ""
        },
        {
          "product_name": "Pasta",
          "brand": "Pasta Paradise",
          "price": 1.75,
          "quantity": 4,
          "total": 7.00,
          "status": ""
        },
        {
          "product_name": "Banana",
          "brand": "Tropical Tastes",
          "price": 0.75,
          "quantity": 6,
          "total": 4.50,
          "status": ""
        },
        {
          "product_name": "Eggs",
          "brand": "Farm Fresh",
          "price": 2.00,
          "quantity": 1,
          "total": 2.00,
          "status": ""
        }
      ],
      popupVisible: false,
    }


      const productsReducer = (state = initialState, action) => {
        console.log(action.payload)
        switch (action.type) {
          case 'CHANGE_STATUS':
            const { index, newStatus } = action.payload;
            const updatedData = [...state.data];
            updatedData[index].status = newStatus;
            return { ...state, data: updatedData };
      
          case 'TOGGLE_POPUP':
            return { ...state, popupVisible: !state.popupVisible };
      
          default:
            return state;
        }
      };
      
      export default productsReducer;
      
      
      