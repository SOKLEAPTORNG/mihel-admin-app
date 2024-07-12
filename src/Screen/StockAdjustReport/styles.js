import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  defaultText: {
    fontSize: 12,
    color: Color.DARK,
  },
  buttonContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  rowContentContainer: {
    height: 'auto',
    width: '100%',
    marginBottom: 15,
  },
  rowContent: {
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
  contentLabel: {
    fontSize: 14,
    color: Color.GRAY,
  },
  contentAmount: {
    fontSize: 14,
    color: Color.DARK,
  },
  bottomSheetLabel: {
    fontSize: 12,
    color: Color.DARK,
    marginBottom: 10,
  },
  dropdownContent: {
    height: 'auto',
    width: '100%',
    position: 'relative',
  },
});
