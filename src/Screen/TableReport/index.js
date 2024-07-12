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

export default function TableReport() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    location: {
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

  return (
    <Layout backgroundColor={Color.LIGHT} paddingHorizontal={0}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.container}>
          <View style={styles.screen}>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}>
              <AppSearch onPress={handleShowBottomSheet} />
              <AppCard borderRadius={20} marginTop={15} activeOpacity={0.2}>
                <RowItem label={'T001'} amount={'$ 40.00'} />
              </AppCard>
              <AppCard borderRadius={20} marginTop={15} activeOpacity={0.2}>
                <RowItem label={'T002'} amount={'$ 29.00'} />
              </AppCard>
            </ScrollView>
          </View>
          <AppBottomSheet
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <AppText style={styles.bottomSheetLabel}>Location:</AppText>
            <View style={styles.dropdownContent}>
              <AppDropdownButton
                marginBottom={12}
                label={'All Location'}
                iconName={
                  dropdowns.location.show
                    ? 'caret-up-sharp'
                    : 'caret-down-sharp'
                }
                onPress={() => toggleDropdown('location', null)}
              />
              {dropdowns.location.show && (
                <AdditionalDropdown
                  data={[
                    'All locations',
                    'Mihel Seoul - 01 (BL 0001)',
                    'Mihel Seoul - 02 (098765)',
                  ]}
                  activeIndex={dropdowns.location.activeIndex}
                  onSelect={index => toggleDropdown('location', index)}
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
