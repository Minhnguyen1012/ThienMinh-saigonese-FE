import * as types from "../constants/review.constants";
const initialState = {
  theReviews: [],
  totalPageNum: 1,
  selectedProject: null,
  loading: false,
  submitReviewLoading: false,
};

const reviewReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_REVIEW_REQUEST:
      return { ...state, loading: true };

    case types.GET_REVIEW_FAILURE:
      return { ...state, loading: false };

    case types.CREATE_REVIEW_REQUEST:
      return { ...state, submitReviewLoading: true };
    case types.CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        selectedProject: {
          ...state.selectedProject,
          reviews: [...state.selectedProject.reviews, payload],
        },
        submitReviewLoading: false,
      };
    case types.GET_REVIEW_SUCCESS:
      return {
        ...state,
        selectedProject: {
          ...state.selectedProject,
          reviews: [payload],
        },
      };

    case types.CREATE_REVIEW_FAILURE:
      return { ...state, submitReviewLoading: false };

    default:
      return state;
  }
};
export default reviewReducer;
