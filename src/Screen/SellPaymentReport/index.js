import React, {useCallback, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../../src/Component/Share/AppText';
import AppSearch from '../../Component/Share/AppSearch';
import AppCard from '../../Component/Share/AppCard';
import {Color} from '../../Constant';
import AppButton from '../../Component/Share/AppButton';
import images from '../../common/images';
import AppBottomSheet from '../../Component/Share/AppBottomSheet';
import AppDropdownButton from '../../Component/Share/AppDropdownButton';
import AppLongButton from '../../../src/Component/Share/AppLongButton';
import AdditionalDropdown from '../../Component/AdditionalDropdown';
import AppSelectDateButton from '../../Component/Share/AppSelectDateButton';
import {useNavigation} from '@react-navigation/core';

export default function SellPaymentReport() {
  const navigation = useNavigation();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    customer: {
      show: false,
      activeIndex: 0,
    },
    businessLocation: {
      show: false,
      activeIndex: 0,
    },
    payment: {
      show: false,
      activeIndex: 0,
    },
    customerGroup: {
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

  const RowItem = ({label, amount}) => (
    <View style={styles.rowItemContainer}>
      <AppText style={styles.rowItemTitle}>{label}</AppText>
      <AppButton
        label={amount}
        backgroundColor={Color.PRIMARY}
        justifyContent={'center'}
        style={{color: Color.LIGHT}}
        padding={5}
        borderRadius={10}
        width={74}
      />
    </View>
  );

  const FixContentItem = ({label, amount}) => (
    <View style={styles.rowContainer}>
      <AppText style={styles.fixContentLabel}>{label}</AppText>
      <AppText style={styles.fixContentAmount}>{amount}</AppText>
    </View>
  );

  return (
    <Layout backgroundColor={Color.LIGHT} paddingHorizontal={0}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.container}>
          <View style={styles.screen}>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}>
              <AppSearch onPress={handleShowBottomSheet} />
              <AppCard
                marginTop={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('SellPayDetailReport')}>
                <RowItem label={'SP2023/0678'} amount={'$ 5.00'} />
                <AppText style={styles.grayText}>25 Oct, 2023 10:30 AM</AppText>
                <View style={styles.rowWrapper}>
                  <AppText style={styles.nameLabel}>General Cuustomer</AppText>
                  <View style={styles.rowCashContainer}>
                    <AppText style={styles.cashLabel}>Cash</AppText>
                    <Image style={styles.cashIcon} source={images.CachIcon()} />
                  </View>
                </View>
              </AppCard>
              <AppCard
                marginTop={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('SellPayDetailReport')}>
                <RowItem label={'SP2023/1678'} amount={'$ 7.00'} />
                <AppText style={styles.grayText}>25 Oct, 2023 10:30 AM</AppText>
                <View style={styles.rowWrapper}>
                  <AppText style={styles.nameLabel}>Jonny</AppText>
                  <View style={styles.rowCashContainer}>
                    <AppText style={styles.cashLabel}>Cash</AppText>
                    <Image style={styles.cashIcon} source={images.CachIcon()} />
                  </View>
                </View>
              </AppCard>
              <AppCard
                marginTop={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('SellPayDetailReport')}>
                <RowItem label={'SP2023/1668'} amount={'$ 9.00'} />
                <AppText style={styles.grayText}>25 Oct, 2023 10:30 AM</AppText>
                <View style={styles.rowWrapper}>
                  <AppText style={styles.nameLabel}>Devid</AppText>
                  <View style={styles.rowCashContainer}>
                    <AppText style={styles.cashLabel}>Cash</AppText>
                    <Image style={styles.cashIcon} source={images.CachIcon()} />
                  </View>
                </View>
              </AppCard>
            </ScrollView>
          </View>
          <View style={styles.fixContent}>
            <AppText style={styles.fixContentTitle}>Total</AppText>
            <FixContentItem label={'Total Amount:'} amount={'$ 21.00'} />
          </View>
          <AppBottomSheet
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <AppText style={styles.bottomSheetLabel}>Customer:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                iconName={
                  dropdowns.customer.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('customer', null)}
              />
              {dropdowns.customer.show && (
                <AdditionalDropdown
                  data={['All', 'Veha som (12345678)', 'Thai (7777)']}
                  activeIndex={dropdowns.customer.activeIndex}
                  onSelect={index => toggleDropdown('customer', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>
              Business Location:
            </AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All Location'}
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
                    'Please Select',
                    'Mihel Seoul - 01',
                    'Mihel Seoul - 02',
                  ]}
                  activeIndex={dropdowns.businessLocation.activeIndex}
                  onSelect={index => toggleDropdown('businessLocation', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Payment Method:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                iconName={
                  dropdowns.payment.show ? 'caret-up-sharp' : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('payment', null)}
              />
              {dropdowns.payment.show && (
                <AdditionalDropdown
                  data={['All', 'Card', 'Bank Transfer']}
                  activeIndex={dropdowns.payment.activeIndex}
                  onSelect={index => toggleDropdown('payment', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Customer Group:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                iconName={
                  dropdowns.customerGroup.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('customerGroup', null)}
              />
              {dropdowns.customerGroup.show && (
                <AdditionalDropdown
                  data={['All', 'VIP', 'Thai']}
                  activeIndex={dropdowns.customerGroup.activeIndex}
                  onSelect={index => toggleDropdown('customerGroup', index)}
                />
              )}
            </View>
            <View style={styles.rowContent}>
              <View style={styles.divider}>
                <AppText style={styles.bottomSheetLabel}>From:</AppText>
                <AppSelectDateButton
                  imageSource={images.DateIcon()}
                  label={'Select Date'}
                />
              </View>
              <View style={styles.divider}>
                <AppText style={styles.bottomSheetLabel}>To:</AppText>
                <AppSelectDateButton
                  imageSource={images.DateIcon()}
                  label={'Select Date'}
                />
              </View>
            </View>
            <AppLongButton
              title={'Search'}
              marginTop={20}
              marginBottom={15}
              onPress={handleCloseBottomSheet}
            />
          </AppBottomSheet>
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
}
