import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function Layout() {
  return (
    <Tabs initialRouteName="screens/home">
      <Tabs.Screen
        name="screens/home"
        options={{
          title: 'home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="screens/status"
        options={{
          title: 'Status',
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="heartbeat-alt" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="screens/profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="screens/settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen name="index" options={{ tabBarButton: () => null }} />
    </Tabs>
  );
}
