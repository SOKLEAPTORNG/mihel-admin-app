import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  dashboardContainer: {
    width: '49%',
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    padding: 10,
    position: 'relative',
  },
  rowdashboardContainer: {
    height: 124,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
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
    fontSize: 14,
    color: Color.LIGHT,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  dashboardLabelData: {
    fontSize: 14,
    color: Color.LIGHT,
    textTransform: 'capitalize',
    marginTop: 5,
  },
  custReportLabel: {
    fontSize: 16,
    color: Color.DARK,
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  buttonContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: Color.GRAY,
  },
  amount: {
    fontSize: 12,
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
  darkDropdownBtnLabel: {
    fontSize: 16,
    color: Color.DARK,
  },
});
