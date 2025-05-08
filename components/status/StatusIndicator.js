import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Check, Clock, AlertCircle, Minus } from 'lucide-react-native';

export default function StatusIndicator({ status }) {
  const getStatusConfig = () => {
    switch (status) {
      case 'completed':
        return {
          color: '#22c55e',
          icon: Check,
          backgroundColor: '#dcfce7',
        };
      case 'pending':
        return {
          color: '#f59e0b',
          icon: Clock,
          backgroundColor: '#fef3c7',
        };
      case 'missed':
        return {
          color: '#ef4444',
          icon: AlertCircle,
          backgroundColor: '#fee2e2',
        };
      default:
        return {
          color: '#94a3b8',
          icon: Minus,
          backgroundColor: '#f1f5f9',
        };
    }
  };

  const { color, icon: Icon, backgroundColor } = getStatusConfig();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Icon size={14} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
