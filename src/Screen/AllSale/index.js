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
import AppCard from '../../Component/Share/AppCard';
import {Color} from '../../Constant';
import images from '../../common/images';
import AppBottomSheet from '../../Component/Share/AppBottomSheet';
import AppDropdownButton from '../../Component/Share/AppDropdownButton';
import AppLongButton from '../../../src/Component/Share/AppLongButton';
import AdditionalDropdown from '../../Component/AdditionalDropdown';
import AppSelectDateButton from '../../Component/Share/AppSelectDateButton';
import {useNavigation} from '@react-navigation/core';

export default function AllSale() {
  const navigation = useNavigation();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    busineesLocation: {
      show: false,
      activeIndex: 0,
    },
    customer: {
      show: false,
      activeIndex: 0,
    },
    paymentStatus: {
      show: false,
      activeIndex: 0,
    },
    user: {
      show: false,
      activeIndex: 0,
    },
    orderFrom: {
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

  const NoBorderRowItem = ({label, amount, color}) => {
    return (
      <View style={styles.noBorderRowItem}>
        <AppText style={styles.darkTextDefault}>{label}</AppText>
        <AppText style={[styles.darkTextDefault, {color}]}>{amount}</AppText>
      </View>
    );
  };

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
                borderRadius={20}
                paddingTop={5}
                paddingBottom={15}
                marginTop={10}
                marginBottom={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('AllSaleDetail')}>
                <NoBorderRowItem
                  label={'Customer :'}
                  amount={'General Customer'}
                />
                <NoBorderRowItem label={'Invoice No :'} amount={'0019'} />
                <NoBorderRowItem
                  label={'Order Status :'}
                  amount={'Final'}
                  color={Color.SUCCESS}
                />
                <NoBorderRowItem
                  label={'Location :'}
                  amount={'Mihel Seoul 7 yang 1'}
                />
                <NoBorderRowItem
                  label={'Total Amount'}
                  amount={'$2.75'}
                  color={Color.SUCCESS}
                />
              </AppCard>
              <AppCard
                borderRadius={20}
                paddingTop={5}
                paddingBottom={15}
                marginBottom={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('AllSaleDetail')}>
                <NoBorderRowItem
                  label={'Customer :'}
                  amount={'General Customer'}
                />
                <NoBorderRowItem label={'Invoice No :'} amount={'0018'} />
                <NoBorderRowItem
                  label={'Order Status :'}
                  amount={'Final'}
                  color={Color.SUCCESS}
                />
                <NoBorderRowItem
                  label={'Location :'}
                  amount={'Mihel Seoul 7 yang 1'}
                />
                <NoBorderRowItem
                  label={'Total Amount'}
                  amount={'$3.30'}
                  color={Color.SUCCESS}
                />
              </AppCard>
              <AppCard
                borderRadius={20}
                paddingTop={5}
                paddingBottom={15}
                marginBottom={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('AllSaleDetail')}>
                <NoBorderRowItem
                  label={'Customer :'}
                  amount={'General Customer'}
                />
                <NoBorderRowItem label={'Invoice No :'} amount={'0017'} />
                <NoBorderRowItem
                  label={'Order Status :'}
                  amount={'Final'}
                  color={Color.SUCCESS}
                />
                <NoBorderRowItem
                  label={'Location :'}
                  amount={'Mihel Seoul 7 yang 1'}
                />
                <NoBorderRowItem
                  label={'Total Amount'}
                  amount={'$13.75'}
                  color={Color.SUCCESS}
                />
              </AppCard>
            </ScrollView>
          </View>
          <View style={styles.fixContent}>
            <AppText style={styles.fixContentTitle}>Total</AppText>
            <FixContentItem label={'Total Payment Status'} amount={'Paid'} />
            <FixContentItem label={'Total Payment Method'} amount={'Cash'} />
            <FixContentItem label={'Total Amount'} amount={'$ 22.55'} />
            <FixContentItem label={'Total Paid'} amount={'$ 22.55'} />
            <FixContentItem label={'Total Discount'} amount={'$ 0.00'} />
            <FixContentItem label={'Total Sales Due'} amount={'$ 22.55'} />
          </View>
          <AppBottomSheet
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <AppText style={styles.bottomSheetLabel}>
              Businees Location:
            </AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All locations'}
                iconName={
                  dropdowns.busineesLocation.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('busineesLocation', null)}
              />
              {dropdowns.busineesLocation.show && (
                <AdditionalDropdown
                  data={[
                    'All location',
                    'Mihel Seoul - 01',
                    'Mihel Seoul - 02',
                  ]}
                  activeIndex={dropdowns.busineesLocation.activeIndex}
                  onSelect={index => toggleDropdown('busineesLocation', index)}
                />
              )}
            </View>
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
                  data={['All', 'VIP', 'Kuny']}
                  activeIndex={dropdowns.customer.activeIndex}
                  onSelect={index => toggleDropdown('customer', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Payment Status:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                iconName={
                  dropdowns.paymentStatus.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('paymentStatus', null)}
              />
              {dropdowns.paymentStatus.show && (
                <AdditionalDropdown
                  data={['All', 'Paid', 'Due', 'Partail']}
                  activeIndex={dropdowns.paymentStatus.activeIndex}
                  onSelect={index => toggleDropdown('paymentStatus', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>User:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                iconName={
                  dropdowns.user.show ? 'caret-up-sharp' : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('user', null)}
              />
              {dropdowns.user.show && (
                <AdditionalDropdown
                  data={['All', 'All', 'Admin Mihelseoul']}
                  activeIndex={dropdowns.user.activeIndex}
                  onSelect={index => toggleDropdown('user', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Order From:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                iconName={
                  dropdowns.orderFrom.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('orderFrom', null)}
              />
              {dropdowns.orderFrom.show && (
                <AdditionalDropdown
                  data={['All', 'From System', 'From App']}
                  activeIndex={dropdowns.orderFrom.activeIndex}
                  onSelect={index => toggleDropdown('orderFrom', index)}
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
