import {Platform, StyleSheet} from 'react-native';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: Platform.OS === 'ios' ? Font.SMALL : 0,
    backgroundColor: Color.LIGHT,
    borderRadius: Font.SMALL,
    width: '100%',
    flexDirection: 'row',
    gap: Font.DEFAULT,
    alignItems: 'center',
    paddingHorizontal: Font.SMALL,
  },
  code: {
    fontFamily: 'Montserrat-Regular',
    fontSize: Font.DEFAULT,
  },
  input: {
    flex: 1,
    fontSize: Font.DEFAULT,
  },
});
