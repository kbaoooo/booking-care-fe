import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  genders: [],
  roles: [],
  positions: [],
  users: [],
  topDoctors: [],
  allDoctors: [],
  allScheduleTime: [],

  allRequiredDoctorInfo: {}
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

    case actionTypes.FETCH_TOP_DOCTORS_SUCCESS: {
      let copyState = { ...state };
      copyState.topDoctors = action.payload;
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_TOP_DOCTORS_FAILED: {
      let copyState = { ...state };
      copyState.topDoctors = [];
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_ALL_DOCTORS_SUCCESS: {
      let copyState = { ...state };
      copyState.allDoctors = action.payload;
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_ALL_DOCTORS_FAILED: {
      let copyState = { ...state };
      copyState.allDoctors = [];
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS: {
      let copyState = { ...state };
      copyState.allScheduleTime = action.payload;
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED: {
      let copyState = { ...state };
      copyState.allScheduleTime = [];
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_REQUIRED_DOCTOR_INFO_SUCCESS: {
      let copyState = { ...state };
      copyState.allRequiredDoctorInfo = action.payload;
      return {
        ...copyState,
      };
    }

    case actionTypes.FETCH_REQUIRED_DOCTOR_INFO_FAILED: {
      let copyState = { ...state };
      copyState.allRequiredDoctorInfo = [];
      return {
        ...copyState,
      };
    }

    default:
      return state;
  }
};

export default adminReducer;
