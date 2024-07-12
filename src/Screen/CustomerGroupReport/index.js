import React, {useCallback, useState} from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
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
import AppStroke from '../../Component/Share/AppStroke';
import AppSelectDateButton from '../../Component/Share/AppSelectDateButton';

export default function CustomerGroupReport() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    customerGroup: {
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

  const RowItem = ({label, total}) => (
    <View style={styles.rowContainer}>
      <AppText style={styles.label}>{label}</AppText>
      <AppText style={styles.totalSale}>{total}</AppText>
    </View>
  );

  return (
    <Layout backgroundColor={Color.LIGHT}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.container}>
          <AppSearch onPress={handleShowBottomSheet} />
          <AppText style={styles.custReportLabel}>
            Customer Group Report List
          </AppText>
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
          <RowItem label={'Customer Group'} total={'Total sale'} />
          <AppStroke marginTop={5} />
          <RowItem label={'VIP'} total={'$22.50'} />

          <AppBottomSheet
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <AppText style={styles.bottomSheetLabel}>
              Customer Group Name:
            </AppText>
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
                  data={['All', 'VIP', 'Kuny']}
                  activeIndex={dropdowns.customerGroup.activeIndex}
                  onSelect={index => toggleDropdown('customerGroup', index)}
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
                    'All Location',
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
