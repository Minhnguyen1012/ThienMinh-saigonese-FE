import * as types from "../constants/review.constants";
import api from "../../apiService";
import { toast } from "react-toastify";

const createReview = (reviewId, reviewText) => async (dispatch) => {
  dispatch({ type: types.CREATE_REVIEW_REQUEST, payload: null });
  try {
    const res = await api.post(`reviews/comments/${reviewId}`, {
      content: reviewText,
    });
    dispatch({ type: types.CREATE_REVIEW_SUCCESS, payload: res.data.data });
    dispatch(reviewActions.getReviews(reviewId));
  } catch (error) {
    dispatch({ type: types.CREATE_REVIEW_FAILURE, payload: null });
    toast.error(error);
  }
};

const getReviews = (menuId) => async (dispatch) => {
  console.log(menuId, "MENU");
  dispatch({ type: types.GET_REVIEW_REQUEST, payload: null });
  try {
    const res = await api.get(`reviews/commentslist/${menuId}`);

    dispatch({ type: types.GET_REVIEW_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_REVIEW_FAILURE, payload: null });
  }
};

const reviewActions = { getReviews, createReview };
export default reviewActions;
