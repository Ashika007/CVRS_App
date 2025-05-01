import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileField({
  icon,
  label,
  value,
  multiline = false,
}) {
  return (
    <View style={[styles.container, multiline && styles.multilineContainer]}>
      <View style={styles.labelContainer}>
        {icon}
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={[styles.value, multiline && styles.multilineValue]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  multilineContainer: {
    marginBottom: 20,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
    marginLeft: 8,
  },
  value: {
    fontSize: 16,
    color: '#334155',
    paddingLeft: 28,
  },
  multilineValue: {
    lineHeight: 22,
  },
});
