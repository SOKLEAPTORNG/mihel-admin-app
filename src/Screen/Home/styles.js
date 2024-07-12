import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'stretch',
  },
  appNameLabel: {
    marginLeft: 10,
    fontSize: 18,
    color: Color.LIGHT,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    width: 140,
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: Color.STROKE,
    position: 'absolute',
    right: 15,
    backgroundColor: Color.LIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownLabel: {
    fontSize: 12,
    color: Color.GRAY,
  },
  downIcon: {
    marginLeft: 10,
    fontSize: 14,
    color: Color.DARK,
  },
  addtionalDropdown: {
    height: 'auto',
    width: 140,
    position: 'absolute',
    zIndex: 999,
    right: 15,
    top: 48,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 0.5,
    borderColor: Color.STROKE,
    backgroundColor: Color.LIGHT,
  },
  additonalContainer: {
    height: 39,
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderColor: Color.STROKE,
  },
  addtionalLabel: {
    fontSize: 12,
    color: Color.LIGHT,
  },
  dashboardScreen: {
    marginTop: 10,
    backgroundColor: Color.LIGHT,
    paddingHorizontal: 15,
    paddingBottom: 5,
    zIndex: -1,
  },
  rowContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  overviewLabel: {
    fontSize: 16,
    color: Color.PRIMARY,
    fontWeight: 'bold',
  },
  filterContainer: {
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: Color.STROKE,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Color.LIGHT,
  },
  filterIcon: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
  },
  filterLabel: {
    marginLeft: 5,
    fontSize: 16,
    color: Color.DARK,
  },
  rowdashboardContainer: {
    height: 124,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dashboardContainer: {
    width: '49%',
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    padding: 15,
    position: 'relative',
  },
  absoluteDashboard: {
    width: '70%',
    height: '100%',
    borderBottomRightRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  dashboardAmountData: {
    fontSize: 24,
    color: Color.LIGHT,
    fontWeight: 'bold',
  },
  dashboardLabelData: {
    fontSize: 16,
    color: Color.LIGHT,
    marginTop: 5,
    textTransform: 'uppercase',
  },
  graphScreen: {
    marginTop: 10,
    backgroundColor: Color.LIGHT,
    paddingHorizontal: 15,
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
  rowGraphItem: {
    marginVertical: 10,
    height: 20,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boldText: {
    fontSize: 16,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  menuIcon: {
    fontSize: 20,
    color: Color.DARK,
  },
  graphContent: {
    width: '100%',
    height: 'auto',
    backgroundColor: Color.LIGHT,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  dropdownContent: {
    height: 'auto',
    width: '100%',
    position: 'relative',
    marginBottom: 175,
  },
});