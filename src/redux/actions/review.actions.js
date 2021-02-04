import * as types from "../constants/review.constants";
import api from "../../apiService";
import { toast } from "react-toastify";

const createReview = (reviewId, reviewText) => async (dispatch) => {
  dispatch({ type: types.CREATE_REVIEW_REQUEST, payload: null });
  try {
    const res = await api.post(`reviews/projects/${reviewId}`, {
      content: reviewText,
    });
    dispatch({ type: types.CREATE_REVIEW_SUCCESS, payload: res.data.data });
    dispatch(reviewActions.getReviews(reviewId));
  } catch (error) {
    dispatch({ type: types.CREATE_REVIEW_FAILURE, payload: null });
    toast.error(error);
  }
};

const getReviews = (reviewId) => async (dispatch) => {
  dispatch({ type: types.GET_REVIEW_REQUEST, payload: null });
  try {
    const res = await api.get(`reviews/projects/${reviewId}`);

    dispatch({ type: types.GET_REVIEW_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_REVIEW_FAILURE, payload: null });
  }
};

const reviewActions = { getReviews, createReview };
export default reviewActions;
