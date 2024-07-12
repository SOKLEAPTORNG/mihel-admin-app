import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  rowContainer: {
    height: 46,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderColor: Color.STROKE,
    borderWidth: 0.5,
    backgroundColor: Color.LIGHT,
  },
  label: {
    fontSize: 14,
    color: Color.GRAY,
  },
  amount: {
    fontSize: 14,
    color: Color.DARK,
  },
});
