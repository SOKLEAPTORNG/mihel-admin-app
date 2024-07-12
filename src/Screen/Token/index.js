import React, {useCallback, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Snackbar from 'react-native-snackbar';
import messaging from '@react-native-firebase/messaging';
import Clipboard from '@react-native-clipboard/clipboard';

import {Layout, Button, LoginRequired} from '../../Component';
import {styles} from './styles';
import {useUser} from '../../Hook';

export default function Token() {
  const [token, setToken] = useState('');
  const user = useUser();

  useEffect(function () {
    (async function () {
      try {
        const token = await messaging().getToken();
        setToken(token);
      } catch (error) {
        setToken('Token not working on iOS Simulator');
      }
    })();
  }, []);

  const handlePress = useCallback(
    function () {
      Clipboard.setString(token);

      Snackbar.show({
        text: 'Token Copied',
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: 'Close',
          onPress: () => Snackbar.dismiss(),
        },
      });
    },
    [token],
  );

  if (!user) {
    return <LoginRequired />;
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.text}>Token: {token} </Text>
        <Button
          title="Copy Token"
          style={styles.button}
          onAction={handlePress}
        />
      </View>
    </Layout>
  );
}
