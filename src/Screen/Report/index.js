import React from 'react';
import {TouchableOpacity, Image, ScrollView} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../../src/Component/Share/AppText';
import images from '../../common/images';
import Icon from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/core';

const RowItem = ({iconSource, label, screenName, style}) => {
  const navigation = useNavigation();

  const onPress = () => {
    if (screenName) {
      navigation.navigate(screenName);
    }
  };

  return (
    <TouchableOpacity style={[styles.rowContainer, style]} onPress={onPress}>
      <Image style={styles.buttonIcon} source={iconSource} />
      <AppText style={styles.labelButton}>{label}</AppText>
      <Icon name="chevron-right" style={styles.rightArrowIcon} />
    </TouchableOpacity>
  );
};

export default function Report() {
  const rowItems = [
    {
      iconSource: images.MenuIcon(),
      label: 'all sale',
      screenName: 'AllSale',
    },
    {
      iconSource: images.ListIcon(),
      label: 'List Pending',
      screenName: 'ListDraft',
    },
    {
      iconSource: images.ListIcon(),
      label: 'List Cancel',
      screenName: 'ListCancel',
    },
    {
      iconSource: images.ShiftIcon(),
      label: 'Shift Report',
      screenName: 'ShiftReport',
    },
    {
      iconSource: images.DoubleArrowIcon(),
      label: 'Purchase & Sale',
      screenName: 'PurchaseAndSell',
    },
    {
      iconSource: images.TopArrow(),
      label: 'Product Sell Report',
      screenName: 'ProductSellReport',
    },
    {
      iconSource: images.ExpenseIcon(),
      label: 'Expense Report',
      screenName: 'ExpenseReport',
    },
    {
      iconSource: images.CustomerReport(),
      label: 'Customer Report',
      screenName: 'CustomerReport',
    },
    {
      iconSource: images.People(),
      label: 'Customer Group Report',
      screenName: 'CustomerGroupReport',
    },
    {
      iconSource: images.StockIcon(),
      label: 'Stock Report',
      screenName: 'StockReport',
    },
    {
      iconSource: images.StockAdjustIcon(),
      label: 'Stock Adjustment Report',
      screenName: 'StockAdjustReport',
    },
    {
      iconSource: images.TrendingIcon(),
      label: 'Trending Products',
      screenName: 'TrendingProduct',
    },
    {
      iconSource: images.ItemReport(),
      label: 'Items Report',
      screenName: 'ItemReport',
    },
    {
      iconSource: images.PurchaseIcon(),
      label: 'Purchase Payment Report',
      screenName: 'PurchasePaymentReport',
    },
    {
      iconSource: images.PurchaseIcon(),
      label: 'Sell Payment Report',
      screenName: 'SellPaymentReport',
    },
    {
      iconSource: images.TableIcon(),
      label: 'Table Report',
      screenName: 'TableReport',
    },
  ];

  return (
    <Layout paddingHorizontal={0}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        {rowItems.map((item, index) => (
          <RowItem
            key={index}
            iconSource={item.iconSource}
            label={item.label}
            screenName={item.screenName}
            onPress={() => {}}
            style={index === rowItems.length - 1 ? {marginBottom: 0} : null}
          />
        ))}
      </ScrollView>
    </Layout>
  );
}
