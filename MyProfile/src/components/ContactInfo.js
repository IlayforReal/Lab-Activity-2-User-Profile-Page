// src/components/ContactInfo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactInfo = ({ isDarkMode }) => {
  return (
    <View style={[styles.contactContainer, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.infoText, { color: isDarkMode ? '#FFF' : '#000' }]}>Email: shiela.mosqueda@example.com</Text>
      <Text style={[styles.infoText, { color: isDarkMode ? '#FFF' : '#000' }]}>Phone: +63 123 4567 890</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ContactInfo;
