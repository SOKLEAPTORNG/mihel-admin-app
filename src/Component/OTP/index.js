import React, {useCallback} from 'react';
import {
  Modal,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {Color, Font} from '../../Constant';
import Layout from '../Layout';
import Button from '../Button';

const propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  visible: PropTypes.bool,
  onAction: PropTypes.func,
};

const CELL_COUNT = 6;

export default function OTP({value, setValue, visible, onAction}) {
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleKeyboardDismiss = useCallback(function () {
    Keyboard.dismiss();
  }, []);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Layout>
        <KeyboardAvoidingView
          style={styles.mainContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback
            style={styles.mainContainer}
            onPress={handleKeyboardDismiss}>
            <View style={styles.container}>
              <Ionicons
                name="phone-portrait-outline"
                color={Color.LIGHT}
                size={Font.XXXLARGE}
              />
              <Text style={styles.text}>Please verify OTP</Text>
              <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
              <Button title="Verify" onAction={onAction} />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Layout>
    </Modal>
  );
}

OTP.propTypes = propTypes;
