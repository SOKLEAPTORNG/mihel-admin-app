import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 15,
  },
  draftLabel: {
    fontSize: 16,
    color: Color.DARK,
    marginVertical: 10,
  },
  buttonContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  noBorderRowItem: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.LIGHT,
  },
  darkTextDefault: {
    fontSize: 14,
    color: Color.DARK,
  },
  bottomSheetLabel: {
    fontSize: 16,
    color: Color.DARK,
    marginBottom: 10,
  },
  dropdownContent: {
    height: 'auto',
    width: '100%',
    position: 'relative',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    justifyContent: 'space-between',
  },
  divider: {
    width: '48%',
  },
});
