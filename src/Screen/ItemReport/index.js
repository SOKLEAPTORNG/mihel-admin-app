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

export default function ItemReport() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    supplier: {
      show: false,
      activeIndex: 0,
    },
    customer: {
      show: false,
      activeIndex: 0,
    },
    businessLocation: {
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
              <AppText style={styles.trendingLabel}>
                Top Tranding Product
              </AppText>
              <AppCard marginTop={15}>
                <RowItem label={'Mihel Beef'} amount={'$ 22.55'} />
                <AppText style={styles.grayText}>25 Oct, 2023 10:30 AM</AppText>
                <AppText style={styles.grayText}>Mihel Seoul 7 yang 1</AppText>
              </AppCard>
              <AppCard marginTop={15}>
                <RowItem label={'Mihel Seafood'} amount={'$ 22.55'} />
                <AppText style={styles.grayText}>25 Oct, 2023 10:30 AM</AppText>
                <AppText style={styles.grayText}>Mihel Seoul 7 yang 1</AppText>
              </AppCard>
              <AppCard marginTop={15}>
                <RowItem label={'Mihel lobster'} amount={'$ 22.55'} />
                <AppText style={styles.grayText}>25 Oct, 2023 10:30 AM</AppText>
                <AppText style={styles.grayText}>Mihel Seoul 7 yang 1</AppText>
              </AppCard>
              <AppCard marginTop={15}>
                <RowItem label={'Mihel kimchi'} amount={'$ 22.55'} />
                <AppText style={styles.grayText}>25 Oct, 2023 10:30 AM</AppText>
                <AppText style={styles.grayText}>Mihel Seoul 7 yang 1</AppText>
              </AppCard>
              <AppCard marginTop={15}>
                <RowItem label={'Bibimbap'} amount={'$ 22.55'} />
                <AppText style={styles.grayText}>25 Oct, 2023 10:30 AM</AppText>
                <AppText style={styles.grayText}>Mihel Seoul 7 yang 1</AppText>
              </AppCard>
            </ScrollView>
          </View>
          <View style={styles.fixContent}>
            <AppText style={styles.fixContentTitle}>Total</AppText>
            <FixContentItem label={'Total Purchase Price'} amount={'$22.55'} />
            <FixContentItem label={'Total Quantity'} amount={'5'} />
            <FixContentItem label={'Total Selling Price'} amount={'$22.55'} />
            <FixContentItem label={'Total Subtotal'} amount={'$112.75'} />
          </View>
          <AppBottomSheet
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <AppText style={styles.bottomSheetLabel}>Supplier:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All Customer'}
                iconName={
                  dropdowns.supplier.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('supplier', null)}
              />
              {dropdowns.supplier.show && (
                <AdditionalDropdown
                  data={['All', 'test - CO0062', 'test - CO0063']}
                  activeIndex={dropdowns.supplier.activeIndex}
                  onSelect={index => toggleDropdown('supplier', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Customer:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All Customer'}
                iconName={
                  dropdowns.customer.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('customer', null)}
              />
              {dropdowns.customer.show && (
                <AdditionalDropdown
                  data={['All', 'General - CO0062', 'General - CO0063']}
                  activeIndex={dropdowns.customer.activeIndex}
                  onSelect={index => toggleDropdown('customer', index)}
                />
              )}
            </View>
            <AppText style={styles.bottomSheetLabel}>Business Location:</AppText>
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
                  data={['Please Select', 'Mihel Seoul - 01', 'Mihel Seoul - 02']}
                  activeIndex={dropdowns.businessLocation.activeIndex}
                  onSelect={index => toggleDropdown('businessLocation', index)}
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
