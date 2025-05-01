import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Info } from 'lucide-react-native';

export default function InfoBox({ text }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Info size={22} color="#3b82f6" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    shadowColor: '#3b82f6',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    marginRight: 12,
    paddingTop: 2,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: '#1e40af',
  },
});
