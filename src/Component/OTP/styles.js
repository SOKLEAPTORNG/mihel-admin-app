import {StyleSheet} from 'react-native';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Font.NORMAL,
  },
  text: {
    color: Color.LIGHT,
    fontSize: Font.DEFAULT,
  },
  codeFieldRoot: {
    gap: Font.DEFAULT,
  },
  cell: {
    width: Font.XLARGE,
    height: Font.XLARGE,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: Color.GREY,
    textAlign: 'center',
    color: Color.LIGHT,
    borderRadius: Font.SMALL,
  },
  focusCell: {
    borderColor: Color.LIGHT,
    color: Color.LIGHT,
  },
  mainContainer: {
    flex: 1,
  },
});
