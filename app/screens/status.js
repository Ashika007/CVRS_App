import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const StatusScreen = () => {
  const timePeriods = [
    'At Birth',
    '6 weeks',
    '10 weeks',
    '14 weeks',
    '9 months',
    '12 months',
    '15 months',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Parent: John Doe</Text>
      <Text style={styles.header}>Child: Baby Jane</Text>

      <ScrollView horizontal>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cell}>Vaccine</Text>
            {timePeriods.map((t, index) => (
              <Text key={index} style={styles.cell}>
                {t}
              </Text>
            ))}
          </View>
          {[...Array(10)].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              <Text style={styles.cell}>Vaccine {rowIndex + 1}</Text>
              {timePeriods.map((_, colIndex) => (
                <Text key={colIndex} style={styles.cell}>
                  ---
                </Text>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  table: { flexDirection: 'column' },
  row: { flexDirection: 'row' },
  cell: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    minWidth: 80,
    textAlign: 'center',
  },
});
