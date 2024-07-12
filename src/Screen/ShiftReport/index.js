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
import AppButton from '../../Component/Share/AppButton';
import images from '../../common/images';
import AppBottomSheet from '../../Component/Share/AppBottomSheet';
import AppDropdownButton from '../../Component/Share/AppDropdownButton';
import AppLongButton from '../../../src/Component/Share/AppLongButton';
import AdditionalDropdown from '../../Component/AdditionalDropdown';
import AppSelectDateButton from '../../Component/Share/AppSelectDateButton';
import {useNavigation} from '@react-navigation/core';

export default function ShiftReport() {
  const navigation = useNavigation();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    user: {
      show: false,
      activeIndex: 0,
    },
    status: {
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
                onPress={() => navigation.navigate('ShiftDetailReport')}>
                <RowItem label={'Admin Mihel 7'} amount={'$ 22.55'} />
                <AppText style={styles.grayText}>25 Oct, 2023 10:30 AM</AppText>
                <AppText style={styles.grayText}>Mihel Seoul 7 yang 1</AppText>
              </AppCard>
              <AppCard
                marginTop={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('ShiftDetailReport')}>
                <RowItem label={'Admin Mihel 7'} amount={'$ 22.55'} />
                <AppText style={styles.grayText}>25 Oct, 2023 10:30 AM</AppText>
                <AppText style={styles.grayText}>Mihel Seoul 7 yang 1</AppText>
              </AppCard>
              <AppCard
                marginTop={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('ShiftDetailReport')}>
                <RowItem label={'Admin Mihel 7'} amount={'$ 22.55'} />
                <AppText style={styles.grayText}>25 Oct, 2023 10:30 AM</AppText>
                <AppText style={styles.grayText}>Mihel Seoul 7 yang 1</AppText>
              </AppCard>
              <AppCard
                marginTop={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('ShiftDetailReport')}>
                <RowItem label={'Admin Mihel 7'} amount={'$ 22.55'} />
                <AppText style={styles.grayText}>25 Oct, 2023 10:30 AM</AppText>
                <AppText style={styles.grayText}>Mihel Seoul 7 yang 1</AppText>
              </AppCard>
            </ScrollView>
          </View>
          <View style={styles.fixContent}>
            <AppText style={styles.fixContentTitle}>Total</AppText>
            <FixContentItem label={'Total Cash'} amount={'$ 22.55'} />
            <FixContentItem label={'Total Bank Transfer'} amount={'$ 0.00'} />
            <FixContentItem label={'Total Sale Amount'} amount={'$ 90.20'} />
          </View>
          <AppBottomSheet
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <AppText style={styles.bottomSheetLabel}>User:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All User'}
                iconName={
                  dropdowns.user.show ? 'caret-up-sharp' : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('user', null)}
              />
              {dropdowns.user.show && (
                <AdditionalDropdown
                  data={['All User', 'Admin MihelSeoul']}
                  activeIndex={dropdowns.user.activeIndex}
                  onSelect={index => toggleDropdown('user', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Status:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All'}
                iconName={
                  dropdowns.status.show ? 'caret-up-sharp' : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('status', null)}
              />
              {dropdowns.status.show && (
                <AdditionalDropdown
                  data={['All', 'Open', 'Close']}
                  activeIndex={dropdowns.status.activeIndex}
                  onSelect={index => toggleDropdown('status', index)}
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
