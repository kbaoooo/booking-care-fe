import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  genders: [],
  roles: [],
  positions: [],
  users: []
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START: {
      let copyState = { ...state };
      copyState.isLoadingGender = true;
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_GENDER_SUCCESS: {
      let copyState = { ...state };
      copyState.genders = action.payload;
      copyState.isLoadingGender = false;
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_GENDER_FAILED: {
      let copyState = { ...state };
      copyState.genders = [];
      copyState.isLoadingGender = false;
      return {
        ...copyState,
      };
    }
    case actionTypes.FETCH_POSITION_SUCCESS: {
      let copyState = { ...state };
      copyState.positions = action.payload;
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_POSITION_FAILED: {
      let copyState = { ...state };
      copyState.positions = [];
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_ROLE_SUCCESS: {
      let copyState = { ...state };
      copyState.roles = action.payload;
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_ROLE_FAILED: {
      let copyState = { ...state };
      copyState.roles = [];
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_ALL_USERS_SUCCESS: {
      let copyState = { ...state };
      copyState.users = action.payload;
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_ALL_USERS_FAILED: {
      let copyState = { ...state };
      copyState.users = [];
      return {
        ...copyState,
      };
    }

    default:
      return state;
  }
};

export default adminReducer;
