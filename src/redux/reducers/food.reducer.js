import * as types from "../constants/food.constants";
const initialState = {
  totalPageNum: 1,
  selectedfood: null,
  Loading: false,
};

const foodReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_FOODS_REQUEST:
      return { ...state, Loading: true };
    case types.GET_FOODS_SUCCESS:
      return { ...state, foods: payload, Loading: false };
    case types.GET_FOODS_FAILURE:
      return { ...state, Loading: false };

    case types.GET_FOOD_INFO_REQUEST:
      return { ...state, Loading: true };
    case types.GET_FOOD_INFO_SUCCESS:
      return { ...state, selectedfood: payload, Loading: false };
    case types.GET_FOOD_INFO_FAILURE:
      return { ...state, Loading: false };

    default:
      return state;
  }
};

export default foodReducer;
