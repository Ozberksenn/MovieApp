import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';
const Input = ({
  onSubmitEditing,
  placeholder,
  onChangeText,
  value,
  defaultValue,
  secure,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onSubmitEditing={onSubmitEditing}
        placeholderTextColor="#A5C9CA"
        value={value}
        onChangeText={onChangeText}
        style={styles.inputText}
        placeholder={placeholder}
        secureTextEntry={secure}
        defaultValue={defaultValue}
      />
    </View>
  );
};

export default Input;
