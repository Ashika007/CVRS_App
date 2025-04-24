import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Parent Info</Text>
      <Text>Name: John Doe</Text>
      <Text>Email: johndoe@example.com</Text>
      <Text>Phone: +1234567890</Text>

      <Text style={styles.header}>Child Info</Text>
      <Text>Name: Baby Jane</Text>
      <Text>DOB: Jan 1, 2023</Text>
      <Text>Gender: Female</Text>
      <Text>Blood Group: O+</Text>
      <Text>Address: 123 Street Name, City, Country</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
});
