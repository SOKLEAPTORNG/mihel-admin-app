import React, {useCallback, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../../src/Component/Share/AppText';
import AppSearch from '../../Component/Share/AppSearch';
import {Color} from '../../Constant';
import AppButton from '../../Component/Share/AppButton';
import images from '../../common/images';
import AppBottomSheet from '../../Component/Share/AppBottomSheet';
import AppDropdownButton from '../../Component/Share/AppDropdownButton';
import AppLongButton from '../../../src/Component/Share/AppLongButton';
import AdditionalDropdown from '../../Component/AdditionalDropdown';
import AppCard from '../../Component/Share/AppCard';
import {useNavigation} from '@react-navigation/core';

export default function StockReport() {
  const navigation = useNavigation();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    businessLocation: {
      show: false,
      activeIndex: 0,
    },
    category: {
      show: false,
      activeIndex: 0,
    },
    subCategory: {
      show: false,
      activeIndex: 0,
    },
    brand: {
      show: false,
      activeIndex: 0,
    },
    unit: {
      show: false,
      activeIndex: 0,
    },
  });

  const handleShowBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  const toggleDropdown = (type, index) => {
    setDropdowns(prevDropdowns => ({
      ...prevDropdowns,
      [type]: {
        show: !prevDropdowns[type].show,
        activeIndex: index !== null ? index : prevDropdowns[type].activeIndex,
      },
    }));
  };

  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const DashboardItem = ({backgroundColor, amount, label}) => {
    return (
      <View style={[styles.dashboardContainer, {backgroundColor}]}>
        <View style={styles.absoluteDashboard} />
        <AppText style={styles.dashboardAmountData}>{amount}</AppText>
        <AppText style={styles.dashboardLabelData}>{label}</AppText>
      </View>
    );
  };

  const RowItem = ({label, amount}) => (
    <View style={styles.rowContainer}>
      <AppText style={styles.label}>{label}</AppText>
      <AppText style={styles.amount}>{amount}</AppText>
    </View>
  );

  return (
    <Layout backgroundColor={Color.LIGHT}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <AppSearch onPress={handleShowBottomSheet} marginBottom={15} />
          <View style={styles.rowdashboardContainer}>
            <DashboardItem
              backgroundColor={'#2B58BE'}
              amount={'$ 300.00'}
              label={'Closing Stock (By Purcchase Price)'}
            />
            <DashboardItem
              backgroundColor={'#3982c9'}
              amount={'$ 375.00'}
              label={'Closing Stock(By Sale Price)'}
            />
          </View>
          <View style={styles.rowdashboardContainer}>
            <DashboardItem
              backgroundColor={'#4D9C66'}
              amount={'$75.00'}
              label={'Potential Profit'}
            />
            <DashboardItem
              backgroundColor={'#ED726E'}
              amount={'$ 20.00'}
              label={'Profit Margin %'}
            />
          </View>
          <AppText style={styles.custReportLabel}>Stoke Report</AppText>
          <View style={styles.buttonContent}>
            <AppButton
              marginRight={5}
              backgroundColor={Color.APPBUTTON}
              iconSource={images.PrintIcon()}
              imageStyle={{
                width: 14.5,
                height: 15,
                resizeMode: 'stretch',
                tintColor: Color.DARKSUCCESS,
              }}
              label={'Print'}
              style={{
                fontSize: 12,
                color: Color.DARKSUCCESS,
                marginLeft: 5,
              }}
            />
            <AppButton
              backgroundColor={Color.APPBUTTON}
              iconName={'file-pdf'}
              iconStyle={{color: Color.DARKSUCCESS, fontSize: 15}}
              label={'Export to PDF'}
              style={{
                fontSize: 12,
                color: Color.DARKSUCCESS,
                marginLeft: 5,
              }}
            />
          </View>
          <AppCard
            marginTop={10}
            paddingVertical={5}
            paddingHorizontal={15}
            isShowShadow={true}
            activeOpacity={0.2}
            onPress={() => navigation.navigate('StockReportDetail')}>
            <AppButton
              borderRadius={10}
              label={'SKU#B006'}
              style={{fontSize: 12, color: Color.DARK}}
              backgroundColor={Color.LIGHTSILVER}
              marginBottom={5}
            />
            <AppButton
              label={'& 22.55'}
              style={{fontSize: 16, color: Color.LIGHT}}
              borderRadius={10}
              backgroundColor={Color.PRIMARY}
              paddingHorizontal={5}
              paddingVertical={3}
              position={'absolute'}
              right={15}
              top={5}
            />
            <AppText style={styles.label}>Hotdog chicken</AppText>
            <RowItem label={'Current Stock'} amount={100} />
          </AppCard>
          <AppCard
            marginTop={10}
            paddingVertical={5}
            paddingHorizontal={15}
            isShowShadow={true}
            activeOpacity={0.2}
            onPress={() => navigation.navigate('StockReportDetail')}>
            <AppButton
              borderRadius={10}
              label={'SKU#B006'}
              style={{fontSize: 12, color: Color.DARK}}
              backgroundColor={Color.LIGHTSILVER}
              marginBottom={5}
            />
            <AppButton
              label={'& 22.55'}
              style={{fontSize: 16, color: Color.LIGHT}}
              borderRadius={10}
              backgroundColor={Color.PRIMARY}
              paddingHorizontal={5}
              paddingVertical={3}
              position={'absolute'}
              right={15}
              top={5}
            />
            <AppText style={styles.label}>Hotdog chicken</AppText>
            <RowItem label={'Current Stock'} amount={100} />
          </AppCard>
          <AppCard
            marginTop={10}
            paddingVertical={5}
            paddingHorizontal={15}
            isShowShadow={true}
            activeOpacity={0.2}
            onPress={() => navigation.navigate('StockReportDetail')}>
            <AppButton
              borderRadius={10}
              label={'SKU#B006'}
              style={{fontSize: 12, color: Color.DARK}}
              backgroundColor={Color.LIGHTSILVER}
              marginBottom={5}
            />
            <AppButton
              label={'& 22.55'}
              style={{fontSize: 16, color: Color.LIGHT}}
              borderRadius={10}
              backgroundColor={Color.PRIMARY}
              paddingHorizontal={5}
              paddingVertical={3}
              position={'absolute'}
              right={15}
              top={5}
            />
            <AppText style={styles.label}>Hotdog chicken</AppText>
            <RowItem label={'Current Stock'} amount={100} />
          </AppCard>
          <AppBottomSheet
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <AppText style={styles.bottomSheetLabel}>
              Business Location:
            </AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                style={styles.darkDropdownBtnLabel}
                iconName={
                  dropdowns.businessLocation.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('businessLocation', null)}
              />
              {dropdowns.businessLocation.show && (
                <AdditionalDropdown
                  data={[
                    'All Location',
                    'Mihel Seoul - 01',
                    'Mihel Seoul - 02',
                  ]}
                  activeIndex={dropdowns.businessLocation.activeIndex}
                  onSelect={index => toggleDropdown('businessLocation', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Category:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                style={styles.darkDropdownBtnLabel}
                iconName={
                  dropdowns.category.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('category', null)}
              />
              {dropdowns.category.show && (
                <AdditionalDropdown
                  data={['All', 'Mihel Seoul ', 'Chicken Wings', 'Pizza']}
                  activeIndex={dropdowns.category.activeIndex}
                  onSelect={index => toggleDropdown('category', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Sub Category:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                style={styles.darkDropdownBtnLabel}
                iconName={
                  dropdowns.subCategory.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('subCategory', null)}
              />
              {dropdowns.subCategory.show && (
                <AdditionalDropdown
                  data={['All', 'Mihel Seoul ', 'Pizza']}
                  activeIndex={dropdowns.subCategory.activeIndex}
                  onSelect={index => toggleDropdown('subCategory', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Brand:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                style={styles.darkDropdownBtnLabel}
                iconName={
                  dropdowns.brand.show ? 'caret-up-sharp' : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('brand', null)}
              />
              {dropdowns.brand.show && (
                <AdditionalDropdown
                  data={['All', 'Mihel 7']}
                  activeIndex={dropdowns.brand.activeIndex}
                  onSelect={index => toggleDropdown('brand', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Unit:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                label={'All'}
                style={styles.darkDropdownBtnLabel}
                iconName={
                  dropdowns.unit.show ? 'caret-up-sharp' : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('unit', null)}
              />
              {dropdowns.unit.show && (
                <AdditionalDropdown
                  data={['All', 'Can']}
                  activeIndex={dropdowns.unit.activeIndex}
                  onSelect={index => toggleDropdown('unit', index)}
                />
              )}
            </View>
            <AppLongButton
              title={'Search'}
              marginTop={20}
              marginBottom={15}
              onPress={handleCloseBottomSheet}
            />
          </AppBottomSheet>
        </ScrollView>
      </TouchableWithoutFeedback>
    </Layout>
  );
}
