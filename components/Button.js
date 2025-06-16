import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const buttonWidth = (width - 60) / 4; // (width - padding*2 - margin*2*buttonCount) / buttonCount

export default function Button({ label, double, operator, top, onPress }) {
  const buttonStyles = [styles.button];
  const textStyles = [styles.buttonText];

  if (double) buttonStyles.push(styles.doubleButton);
  if (operator) buttonStyles.push(styles.operatorButton);
  if (top) {
    buttonStyles.push(styles.topButton);
    textStyles.push(styles.topButtonText);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: buttonWidth,
    width: buttonWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: buttonWidth / 2,
    margin: 5,
  },
  doubleButton: {
    width: buttonWidth * 2 + 10, // width*2 + margin*2
  },
  operatorButton: {
    backgroundColor: '#f09a36',
  },
  topButton: {
    backgroundColor: '#a5a5a5',
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
  },
  topButtonText: {
    color: '#000',
  },
});