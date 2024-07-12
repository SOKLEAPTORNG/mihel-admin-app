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
  noBorderRowItem: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.LIGHT,
  },
  label: {
    fontSize: 14,
    color: Color.GRAY,
  },
  darkTextDefault: {
    fontSize: 14,
    color: Color.DARK,
  },
  contentContainer: {
    width: '100%',
    marginVertical: 10,
  },
  contentLabel: {
    fontSize: 16,
    color: Color.DARK,
  }
});
