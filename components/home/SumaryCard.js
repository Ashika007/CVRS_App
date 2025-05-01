import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SummaryCard({
  title,
  value,
  icon,
  backgroundColor,
  textColor,
}) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={[styles.value, { color: textColor }]}>{value}</Text>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    marginBottom: 8,
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});
