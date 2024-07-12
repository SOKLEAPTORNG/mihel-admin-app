import {StyleSheet} from 'react-native';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  text: {
    color: Color.LIGHT,
    fontFamily: 'Montserrat-Regular',
    fontSize: Font.DEFAULT,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Font.DEFAULT,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
