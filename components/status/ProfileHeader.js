import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileHeader({ parentName, childName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vaccination Status</Text>
      <View style={styles.profileInfo}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Parent:</Text>
          <Text style={styles.value}>{parentName}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Child:</Text>
          <Text style={styles.value}>{childName}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    marginRight: 4,
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: '#334155',
  },
});
