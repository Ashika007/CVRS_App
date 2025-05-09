import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { mockUserData } from '../../../data/mockData';
import supabase from '../../../lib/supabase';
import Header from '../../../components/common/Header';

import ProfileHeader from '../../../components/status/ProfileHeader';
import StatusIndicator from '../../../components/status/StatusIndicator';

export default function StatusScreen({ childId }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [child, setChild] = useState(null);
  const [vaccinations, setVaccinations] = useState([]);
  
  const [expandedVaccine, setExpandedVaccine] = useState(null);
  const [vaccines, setVaccines] = useState([]);
  const [timePoints] = useState([
    'Birth',
    '2m',
    '4m',
    '6m',
    '12m',
    '15m',
    '18m',
    '4y',
    '11y',
  ]);

  useEffect(() => {
    FetchVaccine();
    fetchData();
  }, [childId]);

  const FetchVaccine = async () => {
    const { data, error } = await supabase.from('vaccines').select('*');
    console.log(data);
    setVaccines(data);
  };

  const fetchData = async () => {
    try {
      setLoading(true);

      // Example: Fetch child data (you can modify this according to your schema)
      const { data: childData, error: childError } = await supabase
        .from('children')
        .select(
          `
          *,
          vaccination_records (
            *,
            vaccines (*)
          )
        `
        )
        .eq('id', childId)
        .single();

      if (childError) throw childError;
      setChild(childData);

      // Transform vaccination records into the required format
      const transformedVaccinations = childData.vaccination_records.reduce(
        (acc, record) => {
          const vaccine = record.vaccines;
          const existingVaccine = acc.find((v) => v.id === vaccine.id);

          if (!existingVaccine) {
            acc.push({
              id: vaccine.id,
              name: vaccine.name,
              description: vaccine.description,
              recommendedAgeMonths: vaccine.recommended_age_months,
              schedule: timePoints.map((tp) => {
                const matchingRecord = childData.vaccination_records.find(
                  (r) =>
                    r.vaccine_id === vaccine.id &&
                    getTimePoint(r.vaccination_date) === tp
                );
                return matchingRecord ? matchingRecord.status : 'not-required';
              }),
            });
          }

          return acc;
        },
        
      );

      setVaccinations(transformedVaccinations);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      {vaccines.map((vaccine, index) => (
        <view key={vaccine.id}>
          <text>{vaccine.vaccine_code_name}</text>
          <text>{vaccine.vaccine_and_other_immunizing_agents}</text>
        </view>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#dc2626',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  tableContainer: {
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 24,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
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
    flex: 1,
  },
  chevron: {
    transform: [{ rotate: '0deg' }],
  },
  chevronExpanded: {
    transform: [{ rotate: '90deg' }],
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
  vaccineDetails: {
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
    shadowOffset: { width: 0, height: 1 },
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
