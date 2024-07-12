import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 10,
  },
  saleIcon: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
    marginRight: 5,
  },
  rowDiagramItem: {
    marginVertical: 10,
    height: 20,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trendingLabel: {
    fontSize: 16,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  valueLabel: {
    fontSize: 14,
    color: Color.DARK,
  },
  menuIcon: {
    fontSize: 20,
    color: Color.DARK,
  },
  graphContent: {
    width: '100%',
    height: 'auto',
    backgroundColor: Color.LIGHT,
    marginTop: 10,
  },
  noodleLabel: {
    fontSize: 12,
    color: Color.DARK,
    marginLeft: 52,
    marginTop: -14,
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
