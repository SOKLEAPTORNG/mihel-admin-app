import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  defaultText: {
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
  table: {
    height: 'auto',
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: Color.STROKE,
    marginTop: 17,
  },
  thRowHeader: {
    width: '100%',
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
  },
  thContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: Color.STROKE,
  },
  tableRow: {
    width: '100%',
    height: 46,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderTopWidth: 0.5,
    borderTopColor: Color.STROKE
  },
  label: {
    fontSize: 14,
    color: Color.GRAY,
  },
  amount: {},
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
    fontSize: 14,
    color: Color.DARK,
    marginBottom: 10,
  },
  dropdownContent: {
    height: 'auto',
    width: '100%',
    position: 'relative',
  },
});
