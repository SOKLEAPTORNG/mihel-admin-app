import {StyleSheet} from 'react-native';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.MODAL_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    padding: Font.DEFAULT,
    backgroundColor: Color.LOADING_BACKGROUND,
    borderRadius: Font.SMALL,
  },
});
