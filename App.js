import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Notifee, {
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import AppContainer from './src';
import {store, persistedStore} from './src/Store';
import AppSplashScreen from './src/Screen/AppSplashScreen';

messaging().setBackgroundMessageHandler(async function (remoteMessage) {
  try {
    const {title, body} = remoteMessage.data;
    const channelId = await Notifee.createChannel({
      id: 'default',
      name: 'default',
      importance: AndroidImportance.HIGH,
    });

    await Notifee.displayNotification({
      title,
      body,
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
        lightUpScreen: true,
        visibility: AndroidVisibility.PUBLIC,
      },
    });
  } catch (error) {
    console.error('Backround Notification Error', error);
  }
});

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(function () {
    (async function () {
      try {
        await Notifee.requestPermission();
      } catch (error) {
        console.error('Request iOS Notification Permission Error: ', error);
      }
    })();

    const subscribe = messaging().onMessage(async function (remoteMessage) {
      try {
        const {title, body} = remoteMessage.data;

        const channelId = await Notifee.createChannel({
          id: 'default',
          name: 'default',
          importance: AndroidImportance.HIGH,
        });

        await Notifee.displayNotification({
          title,
          body,
          android: {
            channelId,
            importance: AndroidImportance.HIGH,
          },
        });
      } catch (error) {
        console.error('Foreground Notification Error', error);
      }
    });
    SplashScreen.hide();

    setTimeout(() => {
      setSplashVisible(false);
    }, 2500);

    return subscribe;
  }, []);

  if (isSplashVisible) {
    return <AppSplashScreen />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}
