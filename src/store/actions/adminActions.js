import actionsTypes from "./actionTypes";
import {
  getAllCode,
  createNewUser as createNewUserService,
  getAllUsers,
  deleteUser as deleteUserService,
  editUser as editUserService,
  getTopDoctors,
  getAllDoctors,
  saveDoctorInfo as saveDoctorInfoService
} from "../../services/userService";
import { toast } from "react-toastify";

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionsTypes.FETCH_GENDER_START,
      });
      let res = await getAllCode("GENDER");
      if (res) {
        dispatch(fetchGenderSuccess(res));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (e) {
      dispatch(fetchGenderFailed());
    }
  };
};

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCode("POSITION");
      if (res) {
        dispatch(fetchPositionSuccess(res));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (e) {
      dispatch(fetchPositionFailed());
    }
  };
};

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCode("ROLE");
      if (res) {
        dispatch(fetchRoleSuccess(res));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      dispatch(fetchRoleFailed());
    }
  };
};

export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers();
      if (res) {
        dispatch(fetchAllUsersSuccess(res.users));
      } else {
        dispatch(fetchAllUsersFailed());
      }
    } catch (e) {
      dispatch(fetchAllUsersFailed());
    }
  };
};

export const fetchTopDoctors = () => {
  return async (dispatch, getState) => {
    try {
      let response = await getTopDoctors("5");
      if (response && response.errCode === 0) {
        dispatch({
          type: actionsTypes.FETCH_TOP_DOCTORS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: actionsTypes.FETCH_TOP_DOCTORS_FAILED,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionsTypes.FETCH_TOP_DOCTORS_FAILED,
      });
    }
  };
};

export const fetchAllDoctors = () => {
  return async (dispatch, getState) => {
    try {
      let response = await getAllDoctors();
      if (response && response.errCode === 0) {
        dispatch({
          type: actionsTypes.FETCH_ALL_DOCTORS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: actionsTypes.FETCH_ALL_DOCTORS_FAILED,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionsTypes.FETCH_ALL_DOCTORS_FAILED,
      });
    }
  };
};

export const saveDoctorInfo = (data) => {
  return async (dispatch, getState) => {
    try {
      let response = await saveDoctorInfoService(data);
      if (response && response.errCode === 0) {
        toast.success("Save doctor info success!");
        dispatch({
          type: actionsTypes.SAVE_DOCTOR_SUCCESS,
        });
      } else {
        toast.error("Save doctor info failed!");
        dispatch({
          type: actionsTypes.SAVE_DOCTOR_FAILED,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Save doctor info failed!");
      dispatch({
        type: actionsTypes.SAVE_DOCTOR_FAILED,
      });
    }
  };
};

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      if (res) {
        toast.success("Create new user success!");
        dispatch(createUserSuccess(res));
      } else {
        toast.error("Create new user failed!");
        dispatch(createUserFailed());
      }
    } catch (e) {
      toast.error("Create new user failed!");
      dispatch(createUserFailed());
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(id);
      if (res) {
        toast.success("Delete user success!");
        dispatch(deleteUserSuccess());
      } else {
        toast.error("Delete user failed!");
        dispatch(deleteUserFailed());
      }
    } catch (e) {
      toast.error("Delete user failed!");
      dispatch(deleteUserFailed());
    }
  };
};

export const editUser = (id, data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(id, data);
      if (res) {
        toast.success("Edit user success!");
        dispatch(editUserSuccess());
      } else {
        toast.error("Edit user failed!");
        dispatch(editUserFailed());
      }
    } catch (e) {
      toast.error("Edit user failed!");
      dispatch(editUserFailed());
    }
  };
};

export const createUserSuccess = () => ({
  type: "CREATE_USER_SUCCESS",
});

export const createUserFailed = () => ({
  type: "CREATE_USER_FAILED",
});

export const deleteUserSuccess = () => ({
  type: "DELETE_USER_SUCCESS",
});

export const deleteUserFailed = () => ({
  type: "DELETE_USER_FAILED",
});

export const editUserSuccess = () => ({
  type: "EDIT_USER_SUCCESS",
});

export const editUserFailed = () => ({
  type: "EDIT_USER_FAILED",
});

export const fetchGenderSuccess = (genderData) => ({
  type: actionsTypes.FETCH_GENDER_SUCCESS,
  payload: genderData,
});

export const fetchGenderFailed = () => ({
  type: actionsTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionSuccess = (positionData) => ({
  type: actionsTypes.FETCH_POSITION_SUCCESS,
  payload: positionData,
});

export const fetchPositionFailed = () => ({
  type: actionsTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleSuccess = (roleData) => ({
  type: actionsTypes.FETCH_ROLE_SUCCESS,
  payload: roleData,
});

export const fetchRoleFailed = () => ({
  type: actionsTypes.FETCH_ROLE_FAILED,
});

export const fetchAllUsersSuccess = (usersData) => ({
  type: actionsTypes.FETCH_ALL_USERS_SUCCESS,
  payload: usersData,
});

export const fetchAllUsersFailed = () => ({
  type: actionsTypes.FETCH_ALL_USERS_FAILED,
});
