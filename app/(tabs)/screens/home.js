import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { ArrowRight, Check, Clock, ThumbsUp } from 'lucide-react-native';
import { mockUserData } from '../../../data/mockData';
import Header from '../../../components/common/Header';
import VaccinationAlert from '../../../components/home/VaccinationAlert';
import SummaryCard from '../../../components/home/SumaryCard';
import ActivityItem from '../../../components/home/ActivityItem';
import InfoBox from '../../../components/home/InfoBox';
import LinkButton from '../../../components/common/LinkButton';

export default function HomeScreen() {
  const { parent, child, vaccinations } = mockUserData;

  const totalVaccines = vaccinations.length;
  const completedVaccines = vaccinations.filter(
    (v) => v.status === 'completed'
  ).length;
  const pendingVaccines = vaccinations.filter(
    (v) => v.status === 'pending'
  ).length;
  const completionPercentage = Math.round(
    (completedVaccines / totalVaccines) * 100
  );

  const upcomingVaccination = vaccinations.find((v) => v.status === 'pending');

  const recentActivities = vaccinations
    .filter((v) => v.status === 'completed')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <ScrollView style={styles.container}>
      <Header />

      {upcomingVaccination && (
        <VaccinationAlert
          vaccine={upcomingVaccination.name}
          date={upcomingVaccination.date}
        />
      )}

      <View style={styles.welcomeContainer}>
        <Text style={styles.greeting}>Hi, {parent.name}!</Text>
        <Text style={styles.subtitle}>
          Here's your child's vaccination summary
        </Text>
      </View>

      <View style={styles.summaryContainer}>
        <SummaryCard
          title="Total Vaccines"
          value={totalVaccines.toString()}
          icon={<Check color="#4ade80" size={24} />}
          backgroundColor="#ecfdf5"
          textColor="#065f46"
        />
        <SummaryCard
          title="Pending"
          value={pendingVaccines.toString()}
          icon={<Clock color="#f97316" size={24} />}
          backgroundColor="#fff7ed"
          textColor="#9a3412"
        />
        <SummaryCard
          title="Completed"
          value={`${completionPercentage}%`}
          icon={<ThumbsUp color="#3b82f6" size={24} />}
          backgroundColor="#eff6ff"
          textColor="#1e40af"
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {recentActivities.length > 0 ? (
          recentActivities.map((activity, index) => (
            <ActivityItem
              key={index}
              title={activity.name}
              date={activity.date}
              status={activity.status}
            />
          ))
        ) : (
          <Text style={styles.noActivityText}>No recent activity</Text>
        )}
      </View>

      <InfoBox text="Did you know? Keeping your child's vaccines up-to-date helps prevent 14 diseases!" />

      <View style={styles.buttonContainer}>
        <LinkButton
          title="View Full Vaccination Status"
          icon={<ArrowRight size={18} color="#ffffff" />}
          destination="status"
        />
        <LinkButton
          title="Go to Profile"
          icon={<ArrowRight size={18} color="#ffffff" />}
          destination="profile"
          style={{ backgroundColor: '#10b981' }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  welcomeContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
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
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 12,
  },
  noActivityText: {
    fontSize: 14,
    color: '#64748b',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 12,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    gap: 12,
  },
});
