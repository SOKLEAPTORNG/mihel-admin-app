import {LoadingType} from '../../../Constant';

export function loadingActive() {
  return {
    type: LoadingType.LOADING_ACTIVE,
  };
}

export function loadingInactive() {
  return {
    type: LoadingType.LOADING_INACTIVE,
  };
}
