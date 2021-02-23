import * as types from "../constants/addEdit.constants";

const initialState = {
  recipes: [],
  image: {},
  totalPageNum: 1,
  selectedNewProduct: null,
  loading: false,
};

const recipeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // Request
    case types.RECIPE_REQUEST:
    case types.GET_SINGLE_RECIPE_REQUEST:
    case types.CREATE_RECIPE_REQUEST:
    case types.UPDATE_RECIPE_REQUEST:
    case types.DELETE_RECIPE_REQUEST:
      return { ...state, loading: true };

    // Success
    case types.RECIPE_REQUEST_SUCCESS:
      return {
        ...state,
        recipes: payload.recipes,
        totalPageNum: payload.totalPages,
        loading: false,
      };

    case types.GET_SINGLE_RECIPE_REQUEST_SUCCESS:
      return { ...state, selectedNewProduct: payload, loading: false };

    case types.CREATE_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.UPDATE_RECIPE_SUCCESS:
      return {
        ...state,
        selectedNewProduct: payload,
        loading: false,
      };

    case types.DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedNewProduct: {},
      };

    case types.UPLOAD_IMAGE_REQUEST:
      return { ...state, loading: true };
    case types.UPLOAD_IMAGE_SUCCESS:
      return { ...state, image: payload, loading: false };
    case types.UPLOAD_IMAGE_FAILURE:
      return { ...state, loading: false };
    // Failure
    case types.RECIPE_REQUEST_FAILURE:
    case types.GET_SINGLE_RECIPE_REQUEST_FAILURE:
    case types.CREATE_RECIPE_FAILURE:
    case types.UPDATE_RECIPE_FAILURE:
    case types.DELETE_RECIPE_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default recipeReducer;
