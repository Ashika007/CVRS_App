import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Check, Clock, X, Minus } from 'lucide-react-native';

export default function StatusIndicator({ status }) {
  const getStatusDisplay = () => {
    switch (status) {
      case 'completed':
        return {
          icon: <Check size={16} color="#10b981" />,
          color: '#10b981',
          backgroundColor: '#d1fae5',
        };
      case 'pending':
        return {
          icon: <Clock size={16} color="#f59e0b" />,
          color: '#f59e0b',
          backgroundColor: '#fef3c7',
        };
      case 'missed':
        return {
          icon: <X size={16} color="#ef4444" />,
          color: '#ef4444',
          backgroundColor: '#fee2e2',
        };
      case 'not-required':
      default:
        return {
          icon: <Minus size={16} color="#94a3b8" />,
          color: '#94a3b8',
          backgroundColor: '#f1f5f9',
        };
    }
  };

  const { icon, color, backgroundColor } = getStatusDisplay();

  return <View style={[styles.container, { backgroundColor }]}>{icon}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
