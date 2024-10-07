// src/components/ProfileHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ProfileHeader = ({ isDarkMode }) => {
  return (
    <View>
      {/* Profile Box on top of the Profile Header */}
      <View style={[styles.profileBox, { backgroundColor: isDarkMode ? '#444' : '#FFFFFF' }]}>
        <Text style={[styles.profileText, { color: isDarkMode ? '#FFF' : '#000' }]}>Profile</Text>
      </View>
      
      <View style={[styles.headerContainer, { backgroundColor: isDarkMode ? '#1E1E1E' : '#BCF2F6' }]}>
        <Image
          source={require('../assets/image.png')} // Ensure this path is correct
          style={styles.profileImage}
        />
        <Text style={[styles.name, { color: isDarkMode ? '#FFF' : '#000' }]}>Shiela Theresa Mosqueda</Text>
        <Text style={[styles.status, { color: '#FFC107' }]}>Software Engineer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileBox: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 300,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  profileImage: {
    width: width * 0.25, // Responsive image size based on screen width
    height: width * 0.25,
    borderRadius: (width * 0.25) / 2, // Circular image
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: '#FFC107', // Gold color remains consistent
  },
});

export default ProfileHeader;
