import React, {useCallback, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import AppSearch from '../../Component/Share/AppSearch';
import AppCard from '../../Component/Share/AppCard';
import {Color} from '../../Constant';
import images from '../../common/images';
import AppBottomSheet from '../../Component/Share/AppBottomSheet';
import AppDropdownButton from '../../Component/Share/AppDropdownButton';
import AppLongButton from '../../Component/Share/AppLongButton';
import AdditionalDropdown from '../../Component/AdditionalDropdown';
import AppSelectDateButton from '../../Component/Share/AppSelectDateButton';
import {useNavigation} from '@react-navigation/core';
import AppButton from '../../Component/Share/AppButton';

export default function ListCancel() {
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
    user: {
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

  return (
    <Layout backgroundColor={Color.LIGHT} paddingHorizontal={0}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.container}>
          <View style={styles.screen}>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}>
              <AppSearch onPress={handleShowBottomSheet} />
              <AppText style={styles.draftLabel}>Drafts</AppText>
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
                borderRadius={20}
                paddingTop={5}
                paddingBottom={15}
                marginTop={10}
                marginBottom={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('ListCancelDetail')}>
                <NoBorderRowItem
                  label={'Date :'}
                  amount={'29-29-2023 03-51 pm '}
                />
                <NoBorderRowItem
                  label={'Reference No :'}
                  amount={'Al233539473'}
                />
                <NoBorderRowItem
                  label={'Customer Name :'}
                  amount={'Ricky Nach'}
                />
                <NoBorderRowItem
                  label={'Location :'}
                  amount={'Mihel Seoul 7 yang 1'}
                />
              </AppCard>
              <AppCard
                borderRadius={20}
                paddingTop={5}
                paddingBottom={15}
                marginBottom={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('ListCancelDetail')}>
                <NoBorderRowItem
                  label={'Date :'}
                  amount={'29-29-2023 03-51 pm '}
                />
                <NoBorderRowItem
                  label={'Reference No :'}
                  amount={'AL98836895'}
                />
                <NoBorderRowItem
                  label={'Customer Name :'}
                  amount={'Ricky Nach'}
                />
                <NoBorderRowItem
                  label={'Location :'}
                  amount={'Mihel Seoul 7 yang 1'}
                />
              </AppCard>
              <AppCard
                borderRadius={20}
                paddingTop={5}
                paddingBottom={15}
                marginBottom={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('ListCancelDetail')}>
                <NoBorderRowItem
                  label={'Date :'}
                  amount={'29-29-2023 03-51 pm '}
                />
                <NoBorderRowItem
                  label={'Reference No :'}
                  amount={'AL000125529'}
                />
                <NoBorderRowItem
                  label={'Customer Name :'}
                  amount={'Ricky Nach'}
                />
                <NoBorderRowItem
                  label={'Location :'}
                  amount={'Mihel Seoul 7 yang 1'}
                />
              </AppCard>
            </ScrollView>
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
