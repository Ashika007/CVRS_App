import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, CircleAlert as AlertCircle } from 'lucide-react-native';

export default function VaccinationAlert({ vaccine, date }) {
  // Format date to be more readable
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AlertCircle size={22} color="#f97316" />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Next Vaccine Due</Text>
        <Text style={styles.vaccine}>{vaccine}</Text>
        <View style={styles.dateContainer}>
          <Calendar size={16} color="#64748b" />
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff7ed',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    shadowColor: '#f97316',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#f97316',
  },
  iconContainer: {
    marginRight: 12,
    paddingTop: 2,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9a3412',
    marginBottom: 4,
  },
  vaccine: {
    fontSize: 18,
    fontWeight: '700',
    color: '#9a3412',
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    marginLeft: 6,
    fontSize: 14,
    color: '#64748b',
  },
});
