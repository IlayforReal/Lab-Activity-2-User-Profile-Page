import { StyleSheet, Text, View } from 'react-native';
import Profile from './src/pages/Profile'; // Corrected import path
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <Profile />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,  // Ensure SafeAreaView takes the full height of the screen
  },
});
