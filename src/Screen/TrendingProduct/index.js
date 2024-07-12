import React, {useCallback, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AppSelectDateButton from '../../Component/Share/AppSelectDateButton';
import {BarChart} from 'react-native-gifted-charts';
import {Dimensions} from 'react-native';

export default function TrendingProduct() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const windowHeight = Dimensions.get('window').height;
  const AppBottomSheetHeight = windowHeight * 0.84;
  const [dropdowns, setDropdowns] = useState({
    locationDropdown: {
      show: false,
      activeIndex: 0,
    },
    categoryDropdown: {
      show: false,
      activeIndex: 0,
    },
    subCategoryDropdown: {
      show: false,
      activeIndex: 0,
    },
    brandDropdown: {
      show: false,
      activeIndex: 0,
    },
    unitDropdown: {
      show: false,
      activeIndex: 0,
    },
    numberOfProductDropdown: {
      show: false,
      activeIndex: 0,
    },
    productTypeDropdown: {
      show: false,
      activeIndex: 0,
    },
  });

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

  const handleShowBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  const barData = [
    {
      value: 2.5,
      labelTextStyle: {color: Color.DARK, fontSize: 12},
      frontColor: '#6199E9',
    },
  ];

  return (
    <Layout backgroundColor={Color.LIGHT}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.container}>
          <AppSearch onPress={handleShowBottomSheet} />
          <View style={styles.row}>
            <Image style={styles.saleIcon} source={images.SaleIcon()} />
            <AppText style={styles.trendingLabel}>Trending Product</AppText>
          </View>
          <View style={styles.rowDiagramItem}>
            <AppText style={styles.valueLabel}>-Values</AppText>
            <TouchableOpacity>
              <SimpleLineIcons style={styles.menuIcon} name="menu" />
            </TouchableOpacity>
          </View>
          <View style={styles.graphContent}>
            <BarChart
              data={barData}
              barWidth={7}
              roundedTop
              roundedBottom
              hideRules
              xAxisThickness={0}
              yAxisThickness={0}
              yAxisTextStyle={{color: Color.DARK, fontSize: 14}}
              noOfSections={2}
              maxValue={2.5}
            />
            <AppText style={styles.noodleLabel}>មីហិរគ្រឿងសមុទ្រPc(s)</AppText>
          </View>
          <View style={styles.buttonContent}>
            <AppButton
              marginTop={10}
              backgroundColor={Color.SUCCESS}
              iconSource={images.PrintIcon()}
              imageStyle={{
                width: 14.5,
                height: 15,
                resizeMode: 'stretch',
                tintColor: Color.LIGHT,
              }}
              label={'Print'}
              style={{
                fontSize: 16,
                color: Color.LIGHT,
                marginLeft: 5,
              }}
            />
          </View>
          <AppBottomSheet
            height={AppBottomSheetHeight}
            title={'Filters'}
            visible={isBottomSheetVisible}
            closeModal={() => setIsBottomSheetVisible(false)}>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}>
              <AppText style={styles.bottomSheetLabel}>
                Business Location:
              </AppText>
              <View style={styles.dropdownContent}>
                <AppDropdownButton
                  marginBottom={12}
                  label={'All'}
                  iconName={
                    dropdowns.locationDropdown.show
                      ? 'caret-up-sharp'
                      : 'caret-down-sharp'
                  }
                  onPress={() => toggleDropdown('locationDropdown', null)}
                />
                {dropdowns.locationDropdown.show && (
                  <AdditionalDropdown
                    data={['All', 'VIP', 'Kuny']}
                    activeIndex={dropdowns.locationDropdown.activeIndex}
                    onSelect={index =>
                      toggleDropdown('locationDropdown', index)
                    }
                  />
                )}
              </View>
              <AppText style={styles.bottomSheetLabel}>Category:</AppText>
              <View style={styles.dropdownContent}>
                <AppDropdownButton
                  marginBottom={12}
                  label={'All'}
                  iconName={
                    dropdowns.categoryDropdown.show
                      ? 'caret-up-sharp'
                      : 'caret-down-sharp'
                  }
                  onPress={() => toggleDropdown('categoryDropdown', null)}
                />
                {dropdowns.categoryDropdown.show && (
                  <AdditionalDropdown
                    data={['All', 'Customer', 'Suppliers']}
                    activeIndex={dropdowns.categoryDropdown.activeIndex}
                    onSelect={index =>
                      toggleDropdown('categoryDropdown', index)
                    }
                  />
                )}
              </View>
              <AppText style={styles.bottomSheetLabel}>Sub category:</AppText>
              <View style={styles.dropdownContent}>
                <AppDropdownButton
                  marginBottom={12}
                  label={'All'}
                  iconName={
                    dropdowns.subCategoryDropdown.show
                      ? 'caret-up-sharp'
                      : 'caret-down-sharp'
                  }
                  onPress={() => toggleDropdown('subCategoryDropdown', null)}
                />
                {dropdowns.subCategoryDropdown.show && (
                  <AdditionalDropdown
                    data={['All', 'Customer', 'Suppliers']}
                    activeIndex={dropdowns.subCategoryDropdown.activeIndex}
                    onSelect={index =>
                      toggleDropdown('subCategoryDropdown', index)
                    }
                  />
                )}
              </View>
              <AppText style={styles.bottomSheetLabel}>Brand:</AppText>
              <View style={styles.dropdownContent}>
                <AppDropdownButton
                  marginBottom={12}
                  label={'All'}
                  iconName={
                    dropdowns.brandDropdown.show
                      ? 'caret-up-sharp'
                      : 'caret-down-sharp'
                  }
                  onPress={() => toggleDropdown('brandDropdown', null)}
                />
                {dropdowns.brandDropdown.show && (
                  <AdditionalDropdown
                    data={['All', 'Customer', 'Suppliers']}
                    activeIndex={dropdowns.brandDropdown.activeIndex}
                    onSelect={index => toggleDropdown('brandDropdown', index)}
                  />
                )}
              </View>
              <AppText style={styles.bottomSheetLabel}>Unit:</AppText>
              <View style={styles.dropdownContent}>
                <AppDropdownButton
                  marginBottom={12}
                  label={'All'}
                  iconName={
                    dropdowns.unitDropdown.show
                      ? 'caret-up-sharp'
                      : 'caret-down-sharp'
                  }
                  onPress={() => toggleDropdown('unitDropdown', null)}
                />
                {dropdowns.unitDropdown.show && (
                  <AdditionalDropdown
                    marginBottom={12}
                    data={['All', 'Customer', 'Suppliers']}
                    activeIndex={dropdowns.unitDropdown.activeIndex}
                    onSelect={index => toggleDropdown('unitDropdown', index)}
                  />
                )}
              </View>
              <AppText style={styles.bottomSheetLabel}>
                Number of product:
              </AppText>
              <View style={styles.dropdownContent}>
                <AppDropdownButton
                  marginBottom={12}
                  label={'All'}
                  iconName={
                    dropdowns.numberOfProductDropdown.show
                      ? 'caret-up-sharp'
                      : 'caret-down-sharp'
                  }
                  onPress={() =>
                    toggleDropdown('numberOfProductDropdown', null)
                  }
                />
                {dropdowns.numberOfProductDropdown.show && (
                  <AdditionalDropdown
                    data={['All', 'Customer', 'Suppliers']}
                    activeIndex={dropdowns.numberOfProductDropdown.activeIndex}
                    onSelect={index =>
                      toggleDropdown('numberOfProductDropdown', index)
                    }
                  />
                )}
              </View>
              <AppText style={styles.bottomSheetLabel}>Product Type:</AppText>
              <View style={styles.dropdownContent}>
                <AppDropdownButton
                  marginBottom={12}
                  label={'All'}
                  iconName={
                    dropdowns.productTypeDropdown.show
                      ? 'caret-up-sharp'
                      : 'caret-down-sharp'
                  }
                  onPress={() => toggleDropdown('productTypeDropdown', null)}
                />
                {dropdowns.productTypeDropdown.show && (
                  <AdditionalDropdown
                    data={['All', 'Customer', 'Suppliers']}
                    activeIndex={dropdowns.productTypeDropdown.activeIndex}
                    onSelect={index =>
                      toggleDropdown('productTypeDropdown', index)
                    }
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
                marginTop={20}
                marginBottom={15}
                title={'Search'}
                onPress={handleCloseBottomSheet}
              />
            </ScrollView>
          </AppBottomSheet>
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
}
