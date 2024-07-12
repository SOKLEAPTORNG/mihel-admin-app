import React, {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Color} from '../../Constant';
import AppText from '../Share/AppText';

export default function AppHeaderLeftTitle({title}) {
  const navigation = useNavigation();

  const handlePress = useCallback(
    function () {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Ionicons name="chevron-back-outline" size={30} color={Color.HEADERBACKARROW} />
      </TouchableOpacity>
      <AppText style={styles.headerTitle}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: Color.DARK,
    marginLeft: 10,
  },
});
