import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeHeader({ parentName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi, {parentName}!</Text>
      <Text style={styles.subtitle}>
        Here's your child's vaccination summary
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
  },
});
