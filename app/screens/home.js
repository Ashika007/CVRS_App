import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Hi, Parent! Here's your child's vaccination summary.
      </Text>

      <Text style={styles.alert}>Next Vaccine: Polio – May 10, 2025</Text>

      <Text style={styles.tip}>
        💡 Did you know? Keeping your child’s vaccines up-to-date helps prevent
        14 diseases!
      </Text>

      <Button
        title="View Full Vaccination Status"
        onPress={() => navigation.navigate('Status')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button title="Contact Doctor" onPress={() => {}} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  welcome: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  alert: { fontSize: 16, color: 'red', marginBottom: 20 },
  tip: { fontStyle: 'italic', marginBottom: 20 },
});
