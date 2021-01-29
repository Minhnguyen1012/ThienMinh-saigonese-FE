import * as types from "../constants/food.constants";
import api from "../../apiService";

const foodsRequest = () => async (dispatch) => {
  dispatch({ type: types.GET_FOODS_REQUEST, payload: null });
  try {
    const res = await api.get(`/food`);
    dispatch({ type: types.GET_FOODS_SUCCESS, payload: res.data.data.foods });
  } catch (error) {
    dispatch({ type: types.GET_FOODS_FAILURE, payload: null });
  }
};

const getFoodByCategory = (query) => async (dispatch) => {
  dispatch({ type: types.GET_FOODS_REQUEST, payload: null });
  try {
    console.log(query);
    const res = await api.get(`/food?limit=10&category=${query}`);
    dispatch({ type: types.GET_FOODS_SUCCESS, payload: res.data.data.foods });
  } catch (error) {
    dispatch({ type: types.GET_FOODS_FAILURE, payload: null });
  }
};

const getSingleFood = (id) => async (dispatch) => {
  dispatch({ type: types.GET_FOOD_INFO_REQUEST, payload: null });
  try {
    const res = await api.get(`/food/${id}`);
    dispatch({
      type: types.GET_FOOD_INFO_SUCCESS,
      payload: res.data.data.singleFood,
    });
  } catch (error) {
    dispatch({ type: types.GET_FOOD_INFO_FAILURE, payload: null });
  }
};

const foodActions = {
  foodsRequest,
  getSingleFood,
  getFoodByCategory,
};
export default foodActions;
