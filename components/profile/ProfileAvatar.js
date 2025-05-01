import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileAvatar({ name, imageUrl, size = 80 }) {
  // Get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const initials = getInitials(name);
  const hasImage = imageUrl && imageUrl.length > 0;

  return (
    <View style={styles.container}>
      {hasImage ? (
        <Image
          source={{ uri: imageUrl }}
          style={[
            styles.image,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        />
      ) : (
        <View
          style={[
            styles.placeholderContainer,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        >
          <Text style={[styles.placeholderText, { fontSize: size / 3 }]}>
            {initials}
          </Text>
        </View>
      )}
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#e2e8f0',
  },
  placeholderContainer: {
    backgroundColor: '#bfdbfe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#1e40af',
    fontWeight: '600',
  },
  name: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#1e293b',
  },
});
