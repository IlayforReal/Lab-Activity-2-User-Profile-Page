// src/screens/Profile.js
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import ContactInfo from '../components/ContactInfo';
import SettingsList from '../components/SettingsList';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <ProfileHeader isDarkMode={isDarkMode} />
      <ContactInfo isDarkMode={isDarkMode} />
      <SettingsList isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensure ScrollView takes up available space
  },
});

export default Profile;
