import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { mockUserData } from '../../data/mockData';
import ProfileHeader from '../../components/status/ProfileHeader';
import StatusIndicator from '../../components/status/StatusIndicator';

export default function StatusScreen() {
  const { parent, child, vaccineSchedule } = mockUserData;
  const [expandedVaccine, setExpandedVaccine] = useState(null);

  const toggleVaccineExpand = (vaccineId) => {
    if (expandedVaccine === vaccineId) {
      setExpandedVaccine(null);
    } else {
      setExpandedVaccine(vaccineId);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader parentName={parent.name} childName={child.name} />

      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerCell, styles.vaccineNameHeader]}>
            Vaccine
          </Text>
          {vaccineSchedule.timePoints.map((timePoint, index) => (
            <Text key={index} style={styles.headerCell}>
              {timePoint}
            </Text>
          ))}
        </View>

        {vaccineSchedule.vaccines.map((vaccine, index) => (
          <View key={index}>
            <TouchableOpacity
              style={[
                styles.vaccineRow,
                expandedVaccine === vaccine.id ? styles.expandedRow : null,
              ]}
              onPress={() => toggleVaccineExpand(vaccine.id)}
              activeOpacity={0.7}
            >
              <View style={styles.vaccineNameCell}>
                <Text style={styles.vaccineName}>{vaccine.name}</Text>
                {expandedVaccine === vaccine.id ? (
                  <ChevronDown size={16} color="#64748b" />
                ) : (
                  <ChevronRight size={16} color="#64748b" />
                )}
              </View>

              {vaccineSchedule.timePoints.map((timePoint, tIndex) => (
                <View key={tIndex} style={styles.statusCell}>
                  <StatusIndicator status={vaccine.schedule[tIndex]} />
                </View>
              ))}
            </TouchableOpacity>

            {expandedVaccine === vaccine.id && (
              <View style={styles.expandedInfo}>
                <Text style={styles.vaccineDescription}>
                  {vaccine.description}
                </Text>
                <Text style={styles.vaccineProtection}>
                  <Text style={styles.boldText}>Protects against: </Text>
                  {vaccine.protectsAgainst}
                </Text>
                <Text style={styles.vaccineSideEffects}>
                  <Text style={styles.boldText}>Common side effects: </Text>
                  {vaccine.sideEffects}
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={styles.legendContainer}>
        <Text style={styles.legendTitle}>Status Legend:</Text>
        <View style={styles.legendItem}>
          <StatusIndicator status="completed" />
          <Text style={styles.legendText}>Completed</Text>
        </View>
        <View style={styles.legendItem}>
          <StatusIndicator status="pending" />
          <Text style={styles.legendText}>Pending</Text>
        </View>
        <View style={styles.legendItem}>
          <StatusIndicator status="missed" />
          <Text style={styles.legendText}>Missed</Text>
        </View>
        <View style={styles.legendItem}>
          <StatusIndicator status="not-required" />
          <Text style={styles.legendText}>Not Required</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const ChevronDown = ({ size, color }) => (
  <View style={{ transform: [{ rotate: '90deg' }] }}>
    <ChevronRight size={size} color={color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  tableContainer: {
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 24,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f1f5f9',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerCell: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
    textAlign: 'center',
  },
  vaccineNameHeader: {
    flex: 2,
    paddingLeft: 12,
    textAlign: 'left',
  },
  vaccineRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingVertical: 12,
  },
  expandedRow: {
    backgroundColor: '#f8fafc',
  },
  vaccineNameCell: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
  },
  vaccineName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#334155',
    marginRight: 4,
  },
  statusCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandedInfo: {
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  vaccineDescription: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 8,
  },
  vaccineProtection: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 4,
  },
  vaccineSideEffects: {
    fontSize: 13,
    color: '#475569',
  },
  boldText: {
    fontWeight: '600',
  },
  legendContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 12,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#475569',
  },
});
