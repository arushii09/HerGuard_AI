import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      {/* Avatar */}
      <View style={styles.avatarBox}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=47' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Priya Sharma</Text>
        <Text style={styles.email}>priya@gmail.com</Text>
      </View>

      {/* Cards */}
      <ProfileCard
        title="Trusted Guardians"
        desc="Mom, Rahul"
        onPress={() => navigation.navigate('Records')}
      />

      <ProfileCard
        title="Health Sensitivity"
        desc="Anxiety • Fatigue"
        onPress={() => {}}
      />

      <ProfileCard
        title="Privacy & Consent"
        desc="Full user control"
        onPress={() => {}}
      />

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileCard({ title, desc, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDesc}>{desc}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#0F172A',
  },
  avatarBox: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
  email: {
    fontSize: 13,
    color: '#64748B',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
  },
  cardDesc: {
    fontSize: 13,
    color: '#475569',
    marginTop: 4,
  },
  logoutBtn: {
    marginTop: 'auto',
    backgroundColor: '#DC2626',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
