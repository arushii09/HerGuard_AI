import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';

export default function DashboardScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0F172A" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>HerGuard AI</Text>
        <Text style={styles.subtitle}>Guardian is Active</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Status Card */}
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>I'm Safe</Text>
          <Text style={styles.statusDesc}>
            We are silently monitoring your safety
          </Text>
        </View>

        {/* Features Section */}
        <Text style={styles.sectionTitle}>Safety Features</Text>

        <FeatureCard
          title="Intent-Aware Risk Detection"
          desc="Detects unusual behavior before emergencies"
          onPress={() => navigation.navigate('SafetyCheck')}
        />

        <FeatureCard
          title="Silent Background Monitoring"
          desc="Runs quietly without panic alerts"
          onPress={() => navigation.navigate('GuardianActive')}
        />

        <FeatureCard
          title="Cognitive Safety Check-Ins"
          desc="Soft check-ins instead of loud SOS"
          onPress={() => navigation.navigate('SafetyCheck')}
        />

        <FeatureCard
          title="Human-in-the-Loop Escalation"
          desc="User stays in control of alerts"
          onPress={() => navigation.navigate('EmergencyAction')}
        />

        <FeatureCard
          title="Trusted Guardians"
          desc="Add people who are alerted only when needed"
          onPress={() => navigation.navigate('Profile')}
        />

        <FeatureCard
          title="Safety Records"
          desc="View past safety events & actions"
          onPress={() => navigation.navigate('Records')}
        />

        {/* Emergency Button */}
        <TouchableOpacity
          style={styles.emergencyBtn}
          onPress={() => navigation.navigate('EmergencyAction')}
        >
          <Text style={styles.emergencyText}>🚨 Trigger Emergency</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>
          Privacy-first • No mic • No camera • Full user control
        </Text>
      </ScrollView>
    </View>
  );
}

/* ---------- Feature Card ---------- */
function FeatureCard({ title, desc, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDesc}>{desc}</Text>
    </TouchableOpacity>
  );
}

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
  },

  header: {
    marginBottom: 20,
  },
  appName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
  },

  statusCard: {
    backgroundColor: '#E0F2FE',
    borderRadius: 16,
    padding: 22,
    marginBottom: 24,
  },
  statusTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0369A1',
  },
  statusDesc: {
    marginTop: 6,
    fontSize: 14,
    color: '#075985',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
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

  emergencyBtn: {
    backgroundColor: '#DC2626',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  emergencyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  footer: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 12,
    color: '#64748B',
  },
});
