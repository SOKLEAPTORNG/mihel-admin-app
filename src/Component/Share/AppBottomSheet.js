import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Animated,
} from 'react-native';
import {Color} from '../../Constant';
import AppText from './AppText';

const AppBottomSheet = ({
  visible,
  title,
  children,
  paddingTop = 20,
  paddinBottom,
  width = '94%',
  height,
}) => {
  const animatedValue = useState(new Animated.Value(0))[0];

  const toggleModal = () => {
    Animated.timing(animatedValue, {
      toValue: visible ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const modalAnimatedStyle = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],
        }),
      },
    ],
  };

  return (
    <Modal animationType="slide" visible={visible} transparent>
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.bottomSheet, modalAnimatedStyle]}>
          <View style={styles.screen}>
            <AppText style={styles.headerTitle}>{title}</AppText>
            <View style={[{paddingTop, paddinBottom, width, height}]}>{children}</View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: Color.LIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  screen: {
    width: '100%',
    backgroundColor: Color.LIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  headerTitle: {
    marginTop: 10,
    fontSize: 16,
    color: Color.DARK,
  },
});

export default AppBottomSheet;
