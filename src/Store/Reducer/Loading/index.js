import {LoadingType} from '../../../Constant';

const initialState = {
  status: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LoadingType.LOADING_ACTIVE:
      return {
        ...state,
        status: true,
      };

    case LoadingType.LOADING_INACTIVE:
      return {
        ...state,
        status: false,
      };

    default:
      return state;
  }
}
