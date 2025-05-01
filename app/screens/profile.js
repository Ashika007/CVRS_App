import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  CreditCard as Edit2,
  User,
  Calendar,
  Droplet,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react-native';
import { mockUserData } from '../../data/mockData';
import ProfileField from '../../components/profile/ProfileField';
import ProfileAvatar from '../../components/profile/ProfileAvatar';

export default function ProfileScreen() {
  const { parent, child } = mockUserData;
  const [activeTab, setActiveTab] = useState('child');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Profile</Text>
        <TouchableOpacity style={styles.editButton}>
          <Edit2 size={18} color="#3b82f6" />
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'child' && styles.activeTab]}
          onPress={() => setActiveTab('child')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'child' && styles.activeTabText,
            ]}
          >
            Child
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'parent' && styles.activeTab]}
          onPress={() => setActiveTab('parent')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'parent' && styles.activeTabText,
            ]}
          >
            Parent
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'child' ? (
        <View style={styles.profileContainer}>
          <ProfileAvatar name={child.name} imageUrl={child.photo} size={120} />

          <View style={styles.infoContainer}>
            <ProfileField
              icon={<User size={20} color="#3b82f6" />}
              label="Name"
              value={child.name}
            />

            <ProfileField
              icon={<Calendar size={20} color="#3b82f6" />}
              label="Date of Birth"
              value={child.dob}
            />

            <ProfileField
              icon={<User size={20} color="#3b82f6" />}
              label="Gender"
              value={child.gender}
            />

            <ProfileField
              icon={<Droplet size={20} color="#3b82f6" />}
              label="Blood Group"
              value={child.bloodGroup}
            />

            <ProfileField
              icon={<MapPin size={20} color="#3b82f6" />}
              label="Address"
              value={child.address}
              multiline
            />
          </View>

          <View style={styles.medicalInfoContainer}>
            <Text style={styles.sectionTitle}>Medical Information</Text>
            <View style={styles.medicalInfo}>
              <Text style={styles.medicalInfoLabel}>Allergies:</Text>
              <Text style={styles.medicalInfoValue}>
                {child.allergies || 'None'}
              </Text>
            </View>
            <View style={styles.medicalInfo}>
              <Text style={styles.medicalInfoLabel}>Medical Conditions:</Text>
              <Text style={styles.medicalInfoValue}>
                {child.medicalConditions || 'None'}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.profileContainer}>
          <ProfileAvatar
            name={parent.name}
            imageUrl={parent.photo}
            size={120}
          />

          <View style={styles.infoContainer}>
            <ProfileField
              icon={<User size={20} color="#3b82f6" />}
              label="Name"
              value={parent.name}
            />

            <ProfileField
              icon={<Mail size={20} color="#3b82f6" />}
              label="Email"
              value={parent.email}
            />

            <ProfileField
              icon={<Phone size={20} color="#3b82f6" />}
              label="Phone Number"
              value={parent.phone}
            />

            <ProfileField
              icon={<MapPin size={20} color="#3b82f6" />}
              label="Address"
              value={parent.address}
              multiline
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  editButtonText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
    color: '#3b82f6',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  tab: {
    marginRight: 24,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#3b82f6',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#64748b',
  },
  activeTabText: {
    color: '#3b82f6',
  },
  profileContainer: {
    padding: 20,
  },
  infoContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medicalInfoContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
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
  medicalInfo: {
    marginBottom: 12,
  },
  medicalInfoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 4,
  },
  medicalInfoValue: {
    fontSize: 16,
    color: '#334155',
  },
});
