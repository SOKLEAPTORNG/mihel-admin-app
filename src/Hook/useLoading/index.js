import {useSelector} from 'react-redux';

export default function useLoading() {
  return useSelector(function (state) {
    return state.Loading.status;
  });
}
