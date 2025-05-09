import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileHeader({ childName, parentName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.childName}>{childName}</Text>
      <Text style={styles.parentName}>Parent: {parentName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#2196F1',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  childName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  parentName: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
