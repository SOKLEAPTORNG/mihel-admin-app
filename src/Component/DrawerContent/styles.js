import {StyleSheet, StatusBar, Platform} from 'react-native';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.PRIMARY,
    paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    gap: Font.NORMAL,
    paddingHorizontal: Font.NORMAL,
  },
});
