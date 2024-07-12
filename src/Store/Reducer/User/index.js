import {UserType} from '../../../Constant';

const initialState = {
  data: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UserType.SET_USER:
      return {
        ...state,
        data: action.payload,
      };

    case UserType.USER_LOGOUT:
      return {
        ...state,
        data: null,
      };

    default:
      return state;
  }
}
