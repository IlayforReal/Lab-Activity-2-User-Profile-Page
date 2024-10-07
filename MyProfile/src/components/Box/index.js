// src/components/Box/index.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Box = ({ children }) => {
  return (
    <View style={styles.box}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1, // Take up the entire screen height
    width: '100%',
    backgroundColor: '#BCF2F6', // Light blue color
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Box;
