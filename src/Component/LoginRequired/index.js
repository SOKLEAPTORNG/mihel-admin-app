import React, {useCallback} from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import Layout from '../Layout';
import {styles} from './styles';
import {Color, Font, Screen} from '../../Constant';
import Button from '../Button';

export default function LoginRequired() {
  const navigation = useNavigation();

  const handlePress = useCallback(
    function () {
      navigation.navigate(Screen.LOGIN);
    },
    [navigation],
  );

  return (
    <Layout>
      <View style={styles.container}>
        <AntDesign name="user" size={Font.EXTRA_LARGE} color={Color.LIGHT} />
        <Button title="Login" onAction={handlePress} />
      </View>
    </Layout>
  );
}
