import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  User,
  Key,
  Bell,
  FileText,
  CircleHelp as HelpCircle,
  LogOut,
  ChevronRight,
  Mail,
} from 'lucide-react-native';
import SettingsItem from '../../../components/settings/SettingsItem';
import SettingsSection from '../../../components/settings/SettingsSection';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout????', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => {
          // Handle logout logic here
          Alert.alert('Logged out successfully');
        },
      },
    ]);
  };

  const handleContactSupport = () => {
    Alert.alert(
      'Contact Support',
      'Send an email to vaccianationsupport@gmail.com',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Send Email',
          onPress: () => {
            // Handle email sending logic here
            Alert.alert('Email app would open here');
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <SettingsSection title="Account">
        <SettingsItem
          icon={<User size={22} color="#3b82f6" />}
          title="Edit Profile"
          subtitle="Update parent or child details"
          onPress={() => Alert.alert('Navigate to Edit Profile')}
          showChevron
        />

        <SettingsItem
          icon={<Key size={22} color="#3b82f6" />}
          title="Change Password"
          subtitle="Update your password"
          onPress={() => Alert.alert('Navigate to Change Password')}
          showChevron
        />
      </SettingsSection>

      <SettingsSection title="Notifications">
        <SettingsItem
          icon={<Bell size={22} color="#3b82f6" />}
          title="Vaccination Reminders"
          subtitle="Get notified before due dates"
          rightComponent={
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#cbd5e1', true: '#bfdbfe' }}
              thumbColor={notificationsEnabled ? '#3b82f6' : '#f4f4f5'}
            />
          }
        />
      </SettingsSection>

      <SettingsSection title="Support">
        <SettingsItem
          icon={<FileText size={22} color="#3b82f6" />}
          title="Privacy Policy & Terms"
          subtitle="Read our policies"
          onPress={() => Alert.alert('Navigate to Privacy Policy')}
          showChevron
        />

        <SettingsItem
          icon={<Mail size={22} color="#3b82f6" />}
          title="Contact Support"
          subtitle="vacciantionsupport@gmail.com"
          onPress={handleContactSupport}
          showChevron
        />

        <SettingsItem
          icon={<HelpCircle size={22} color="#3b82f6" />}
          title="Help & FAQ"
          subtitle="Frequently asked questions"
          onPress={() => Alert.alert('Navigate to Help & FAQ')}
          showChevron
        />
      </SettingsSection>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
        activeOpacity={0.7}
      >
        <LogOut size={20} color="#ef4444" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Text style={styles.versionText}>KHOP v1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 16,
    backgroundColor: '#fef2f2',
    paddingVertical: 14,
    borderRadius: 12,
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#ef4444',
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 40,
  },
});
