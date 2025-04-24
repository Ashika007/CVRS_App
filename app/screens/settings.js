import React from 'react';
import { View, Text, Switch, Button, Linking, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const handleContactSupport = () => {
    Linking.openURL('mailto:vacciantionsupport@gmail.com');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Button title="Edit Profile" onPress={() => {}} />
      <Button title="Change Password" onPress={() => {}} />

      <View style={styles.row}>
        <Text>Notifications</Text>
        <Switch />
      </View>

      <Button title="Privacy Policy & Terms" onPress={() => {}} />
      <Button title="Contact Support" onPress={handleContactSupport} />
      <Button title="Logout" onPress={() => {}} color="red" />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
