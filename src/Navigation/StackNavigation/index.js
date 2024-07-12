import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../TabNavigation';
import {Color, Screen} from '../../Constant';
import {LoginScreen} from '../../Screen';
import {AppHeaderLeftTitle} from '../../Component';
import Signin from '../../Screen/Signin';
import ForgetPassword from '../../Screen/ForgetPassword';
import VerifyOTP from '../../Screen/VerifyOTP';
import CreatePassword from '../../Screen/CreatePassword';
import EditProfile from '../../Screen/EditProfile';
import Setting from '../../Screen/Setting';
import Language from '../../Screen/Language';
import AboutUs from '../../Screen/AboutUs';
import Policy from '../../Screen/Policy';
import TermAndCondition from '../../Screen/TermCondition';
import PurchaseAndSell from '../../Screen/PurchaseAndSellReport';
import CustomerReport from '../../Screen/CustomerReport';
import CustomerReportDetail from '../../Screen/CustomerReportDetail';
import CustomerGroupReport from '../../Screen/CustomerGroupReport';
import StockReport from '../../Screen/StockReport';
import StockReportDetail from '../../Screen/StockReportDetail';
import StockAdjustReport from '../../Screen/StockAdjustReport';
import StockAdjustDetailReport from '../../Screen/StockAdjustDetailReport';
import TrendingProduct from '../../Screen/TrendingProduct';
import ItemReport from '../../Screen/ItemReport';
import ItemReportDetail from '../../Screen/ItemReportDetail';
import ProductSellReport from '../../Screen/ProductSellReport';
import ProductSellDetailReport from '../../Screen/ProductSellDetailReport';
import PurchasePaymentReport from '../../Screen/PurchasePaymentReport';
import PurchasePayDetailReport from '../../Screen/PurchasePayDetailReport';
import SellPaymentReport from '../../Screen/SellPaymentReport';
import SellPayDetailReport from '../../Screen/SellPayDetailReport';
import ExpenseReport from '../../Screen/ExpenseReport';
import ShiftReport from '../../Screen/ShiftReport';
import ShiftDetailReport from '../../Screen/ShiftDetailReport';
import ShiftMoreDetailReport from '../../Screen/ShiftMoreDetailReport';
import TableReport from '../../Screen/TableReport';
import AllSale from '../../Screen/AllSale';
import AllSaleDetail from '../../Screen/AllSaleDetail';
import ListDraft from '../../Screen/ListDraft';
import ListDraftDetail from '../../Screen/ListDraftDetail';
import ListCancel from '../../Screen/ListCancel';
import ListCancelDetail from '../../Screen/ListCancelDetail';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.LIGHT,
        },
        headerTitleStyle: {
          color: Color.DARK,
          fontSize: 18,
        },
        headerTitle: '',
        headerLeft: function () {
          return <AppHeaderLeftTitle />;
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name={Screen.HOME}
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name={Screen.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={'SigninScreen'}
        component={Signin}
        options={{
          headerBackVisible: false,
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: Color.REGISTER_APPBACKGROUND,
          },
        }}
      />
      <Stack.Screen
        name={'ForgetPasswordScreen'}
        component={ForgetPassword}
        options={{
          headerStyle: {
            backgroundColor: Color.REGISTER_APPBACKGROUND,
          },
        }}
      />
      <Stack.Screen
        name={'VerifyOTPScreen'}
        component={VerifyOTP}
        options={{
          headerStyle: {
            backgroundColor: Color.REGISTER_APPBACKGROUND,
          },
        }}
      />
      <Stack.Screen
        name={'CreatePasswordScreen'}
        component={CreatePassword}
        options={{
          headerStyle: {
            backgroundColor: Color.REGISTER_APPBACKGROUND,
          },
        }}
      />
      <Stack.Screen
        name={'EditProfileScreen'}
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'SettingScreen'}
        component={Setting}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Setting'} />,
        }}
      />
      <Stack.Screen
        name={'LanguageScreen'}
        component={Language}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Language'} />,
        }}
      />
      <Stack.Screen
        name={'AboutUsScreen'}
        component={AboutUs}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'About Us'} />,
        }}
      />
      <Stack.Screen
        name={'PolicyScreen'}
        component={Policy}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Privacy Policy'} />,
        }}
      />
      <Stack.Screen
        name={'TermConditionScreen'}
        component={TermAndCondition}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Term & Conditional'} />,
        }}
      />
      <Stack.Screen
        name={'PurchaseAndSell'}
        component={PurchaseAndSell}
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <AppHeaderLeftTitle title={'Purchase & sell report '} />
          ),
        }}
      />
      <Stack.Screen
        name={'CustomerReport'}
        component={CustomerReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Customer Report'} />,
        }}
      />
      <Stack.Screen
        name={'CustomerReportDetail'}
        component={CustomerReportDetail}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Customer Report'} />,
        }}
      />
      <Stack.Screen
        name={'CustomerGroupReport'}
        component={CustomerGroupReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <AppHeaderLeftTitle title={'Customer Group Report'} />
          ),
        }}
      />
      <Stack.Screen
        name={'StockReport'}
        component={StockReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Stock Report'} />,
        }}
      />
      <Stack.Screen
        name={'StockReportDetail'}
        component={StockReportDetail}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Stock Report'} />,
        }}
      />
      <Stack.Screen
        name={'StockAdjustReport'}
        component={StockAdjustReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <AppHeaderLeftTitle title={'Stock Adjustment Report'} />
          ),
        }}
      />
      <Stack.Screen
        name={'StockAdjustDetailReport'}
        component={StockAdjustDetailReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <AppHeaderLeftTitle title={'Stock Adjustment Report'} />
          ),
        }}
      />
      <Stack.Screen
        name={'TrendingProduct'}
        component={TrendingProduct}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Trending Product'} />,
        }}
      />
      <Stack.Screen
        name={'ItemReport'}
        component={ItemReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Item Report'} />,
        }}
      />
      <Stack.Screen
        name={'ItemReportDetail'}
        component={ItemReportDetail}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Item Report'} />,
        }}
      />
      <Stack.Screen
        name={'ProductSellReport'}
        component={ProductSellReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <AppHeaderLeftTitle title={'Product sell report'} />
          ),
        }}
      />
      <Stack.Screen
        name={'ProductSellDetailReport'}
        component={ProductSellDetailReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <AppHeaderLeftTitle title={'Sell Details (Invoice No.: 001)'} />
          ),
        }}
      />
      <Stack.Screen
        name={'PurchasePaymentReport'}
        component={PurchasePaymentReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <AppHeaderLeftTitle title={'Purchase Payment Report'} />
          ),
        }}
      />
      <Stack.Screen
        name={'PurchasePayDetailReport'}
        component={PurchasePayDetailReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <AppHeaderLeftTitle title={'Purchase Payment Report'} />
          ),
        }}
      />
      <Stack.Screen
        name={'SellPaymentReport'}
        component={SellPaymentReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <AppHeaderLeftTitle title={'Sell Payment Report'} />
          ),
        }}
      />
      <Stack.Screen
        name={'SellPayDetailReport'}
        component={SellPayDetailReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <AppHeaderLeftTitle title={'Sell Payment Report'} />
          ),
        }}
      />
      <Stack.Screen
        name={'ExpenseReport'}
        component={ExpenseReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Expense Report'} />,
        }}
      />
      <Stack.Screen
        name={'ShiftReport'}
        component={ShiftReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Shift Report'} />,
        }}
      />
      <Stack.Screen
        name={'ShiftDetailReport'}
        component={ShiftDetailReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Shift Report'} />,
        }}
      />
      <Stack.Screen
        name={'ShiftMoreDetailReport'}
        component={ShiftMoreDetailReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <AppHeaderLeftTitle title={'Shift Report Detail'} />
          ),
        }}
      />
      <Stack.Screen
        name={'TableReport'}
        component={TableReport}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Table Report'} />,
        }}
      />
      <Stack.Screen
        name={'AllSale'}
        component={AllSale}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'All Sales'} />,
        }}
      />
      <Stack.Screen
        name={'AllSaleDetail'}
        component={AllSaleDetail}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'All Sales'} />,
        }}
      />
      <Stack.Screen
        name={'ListDraft'}
        component={ListDraft}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'List Pending'} />,
        }}
      />
      <Stack.Screen
        name={'ListDraftDetail'}
        component={ListDraftDetail}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Pending Detail'} />,
        }}
      />
      <Stack.Screen
        name={'ListCancel'}
        component={ListCancel}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'List Cancel'} />,
        }}
      />
      <Stack.Screen
        name={'ListCancelDetail'}
        component={ListCancelDetail}
        options={{
          headerBackVisible: false,
          headerLeft: () => <AppHeaderLeftTitle title={'Cancel Detail'} />,
        }}
      />
    </Stack.Navigator>
  );
}
