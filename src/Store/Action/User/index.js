import {UserType} from '../../../Constant';

export function setUser(payload) {
  return {
    type: UserType.SET_USER,
    payload,
  };
}

export function userLogout() {
  return {
    type: UserType.USER_LOGOUT,
  };
}
