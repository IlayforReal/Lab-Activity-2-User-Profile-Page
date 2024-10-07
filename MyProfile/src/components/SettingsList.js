// src/components/SettingsList.js
import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure @expo/vector-icons is installed

const SettingsList = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <View style={[styles.settingsContainer, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <View style={styles.settingItem}>
        <Ionicons name="moon" size={20} color={isDarkMode ? "#FFF" : "#000"} />
        <Text style={[styles.settingText, { color: isDarkMode ? '#FFF' : '#000' }]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
      </View>
      <View style={styles.settingItem}>
        <Ionicons name="card" size={20} color={isDarkMode ? "#FFF" : "#000"} />
        <Text style={[styles.settingText, { color: isDarkMode ? '#FFF' : '#000' }]}>Cards</Text>
        <Ionicons name="chevron-forward" size={20} color={isDarkMode ? "#FFF" : "#888"} />
      </View>
      <View style={styles.settingItem}>
        <Ionicons name="person" size={20} color={isDarkMode ? "#FFF" : "#000"} />
        <Text style={[styles.settingText, { color: isDarkMode ? '#FFF' : '#000' }]}>Profile Details</Text>
        <Ionicons name="chevron-forward" size={20} color={isDarkMode ? "#FFF" : "#888"} />
      </View>
      <View style={styles.settingItem}>
        <Ionicons name="settings" size={20} color={isDarkMode ? "#FFF" : "#000"} />
        <Text style={[styles.settingText, { color: isDarkMode ? '#FFF' : '#000' }]}>Settings</Text>
        <Ionicons name="chevron-forward" size={20} color={isDarkMode ? "#FFF" : "#888"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  settingText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
});

export default SettingsList;
