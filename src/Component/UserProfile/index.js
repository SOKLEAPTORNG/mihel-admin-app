import React, {useMemo} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
import {useUser} from '../../Hook';

export default function UserProfile() {
  const user = useUser();
  const displayName = useMemo(
    function () {
      return user ? (user.name ? user.name : user.phone) : null;
    },
    [user],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, </Text>
      <Text style={styles.text}>{displayName}</Text>
    </View>
  );
}
