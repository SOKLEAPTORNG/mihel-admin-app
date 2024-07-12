import React from 'react';
import {Modal, ActivityIndicator, View} from 'react-native';

import {styles} from './styles';
import {Color} from '../../Constant';
import {useLoading} from '../../Hook';

export default function Loading() {
  const loading = useLoading();

  return (
    <Modal transparent visible={loading} animationType="fade">
      <View style={styles.container}>
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Color.LIGHT} />
        </View>
      </View>
    </Modal>
  );
}
