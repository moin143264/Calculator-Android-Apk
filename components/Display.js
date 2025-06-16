import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Display({ value, history }) {
  return (
    <View style={styles.display}>
      <Text style={styles.historyText}>{history}</Text>
      <Text style={styles.displayText}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    alignItems: 'flex-end',
    backgroundColor: '#202020',
    padding: 20,
  },
  historyText: {
    fontSize: 24,
    color: '#a0a0a0',
  },
  displayText: {
    fontSize: 72,
    color: '#fff',
  },
});