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
  rowItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  grayText: {
    color: Color.GRAY,
    fontSize: 12,
    marginTop: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  fixContent: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    backgroundColor: Color.LIGHT,
    borderTopColor: Color.STROKE,
    borderTopWidth: 0.5,
    shadowColor: Color.DARK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
  fixContentTitle: {
    fontSize: 20,
    color: Color.DARK,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  contentLabel: {
    fontSize: 16,
    color: Color.DARK,
  },
  contentData: {
    fontSize: 16,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  bottomSheetLabel: {
    fontSize: 16,
    color: Color.DARK,
    marginBottom: 10,
  },
  input: {
    height: 46,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Color.GRAY,
    padding: 15,
    marginBottom: 12,
    fontSize: 12,
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
  qtyPriceLabel: {
    fontSize: 12,
    color: Color.DARK,
  },
});
