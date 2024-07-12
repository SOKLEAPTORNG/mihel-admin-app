import {StyleSheet} from 'react-native';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.LIGHT,
    paddingVertical: Font.SMALL,
    paddingHorizontal: Font.NORMAL,
    borderRadius: Font.SMALL,
  },
  title: {
    fontSize: Font.DEFAULT,
    fontFamily: 'Montserrat-SemiBold',
  },
});
