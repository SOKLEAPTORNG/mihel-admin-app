import React, {useCallback, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
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

export default function ProductSellReport() {
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
      <AppText style={styles.qtyPriceLabel}>{label}</AppText>
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

  const RowContent = ({label, amount}) => (
    <View style={styles.rowContainer}>
      <AppText style={styles.contentLabel}>{label}</AppText>
      <AppText style={styles.contentData}>{amount}</AppText>
    </View>
  );

  const RowCard = ({cardLabel, dataCard}) => (
    <View style={styles.rowContent}>
      <AppText style={styles.contentLabel}>{cardLabel}</AppText>
      <AppText style={styles.contentLabel}>{dataCard}</AppText>
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
                onPress={() => navigation.navigate('ProductSellDetailReport')}>
                <RowCard cardLabel={'Mihel 7 Seafood'} dataCard={'SKU:0019'} />
                <AppText style={styles.grayText}>
                  2 Oct, 2023 10:30 AM - General Customer
                </AppText>
                <RowItem label={'QTY: 1'} amount={'$ 22.55'} />
                <AppText style={styles.qtyPriceLabel}>
                  Unit Price: $22.55
                </AppText>
              </AppCard>
              <AppCard
                marginTop={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('ProductSellDetailReport')}>
                <RowCard cardLabel={'Mihel 7 Beef'} dataCard={'SKU:0018'} />
                <AppText style={styles.grayText}>
                  2 Oct, 2023 10:30 AM - jonny
                </AppText>
                <RowItem label={'QTY: 1'} amount={'$ 22.55'} />
                <AppText style={styles.qtyPriceLabel}>
                  Unit Price: $22.55
                </AppText>
              </AppCard>
              <AppCard
                marginTop={15}
                activeOpacity={0.2}
                onPress={() => navigation.navigate('ProductSellDetailReport')}>
                <RowCard cardLabel={'Mihel 7 lobster'} dataCard={'SKU:0017'} />
                <AppText style={styles.grayText}>
                  2 Oct, 2023 10:30 AM - Devid
                </AppText>
                <RowItem label={'QTY: 1'} amount={'$ 22.55'} />
                <AppText style={styles.qtyPriceLabel}>
                  Unit Price: $22.55
                </AppText>
              </AppCard>
            </ScrollView>
          </View>
          <View style={styles.fixContent}>
            <AppText style={styles.fixContentTitle}>Total</AppText>
            <RowContent label={'Total Quantity'} amount={'3'} />
            <RowContent label={'Total Item Discount'} amount={'$ 0.00'} />
            <RowContent label={'Total Bill Discount'} amount={'$ 0.00'} />
            <RowContent label={'Total'} amount={'$ 67.65'} />
            <RowContent label={'Total Grand Total'} amount={'$ 67.65'} />
          </View>
          <AppBottomSheet
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <AppText style={styles.bottomSheetLabel}>Search Product:</AppText>
            <TextInput
              style={styles.input}
              placeholder="Enter Product Name/SKU/Scan bar code"
            />
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
