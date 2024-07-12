import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {styles} from './styles';
import {Color} from '../../Constant';
import Loading from '../Loading';

const Layout = ({
  paddingHorizontal = 15,
  children,
  justifyContent,
  alignItems,
  backgroundColor = Color.APPBACKGROUND,
}) => {
  return (
    <>
      <StatusBar backgroundColor={Color.LIGHT} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View
          style={[
            styles.container,
            {paddingHorizontal, justifyContent, alignItems, backgroundColor},
          ]}>
          <Loading />
          {children}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Layout;
