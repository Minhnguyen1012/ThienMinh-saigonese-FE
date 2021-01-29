import * as types from "../constants/cart.constants";
const initialState = {
  totalPageNum: 1,
  cartFoods: [],
  loading: false,
};

const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_FOOD_TO_CART_SUCCESS:
      let foundFlag = false;
      const newCart = state.cartFoods.map((food) => {
        if (food._id === payload._id) {
          foundFlag = true;
          return payload;
        }
        return food;
      });
      if (foundFlag) return { ...state, cartFoods: newCart, loading: false };
      return { ...state, cartFoods: [...state.cartFoods, payload] };

    default:
      return state;
  }
};

export default CartReducer;
