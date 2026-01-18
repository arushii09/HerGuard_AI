import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Colors } from '../theme/colors';

export default function FeaturesScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>HerGuard AI Features</Text>

      <FeatureCard
        title="Intent-Aware Risk Detection"
        desc="Detects unusual behaviour patterns early"
        action="Simulate Risk Detection"
        onPress={() => navigation.navigate('SafetyCheck')}
      />

      <FeatureCard
        title="Silent Background Monitoring"
        desc="Guardian runs quietly without panic"
        action="View Guardian Status"
        onPress={() => navigation.navigate('GuardianActive')}
      />

      <FeatureCard
        title="Cognitive Safety Check-Ins"
        desc="Soft check-ins instead of loud SOS"
        action="Trigger Safety Check"
        onPress={() => navigation.navigate('SafetyCheck')}
      />

      <FeatureCard
        title="Human-in-the-Loop Escalation"
        desc="User stays in control of alerts"
        action="Test Escalation"
        onPress={() => navigation.navigate('EmergencyAction')}
      />

      <FeatureCard
        title="Health & Safety Context"
        desc="Fatigue & anxiety affect sensitivity"
        action="Update Health Profile"
        onPress={() => navigation.navigate('ProfileSetup')}
      />

      <FeatureCard
        title="Trusted Guardians"
        desc="Add people who help when needed"
        action="Manage Guardians"
        onPress={() => navigation.navigate('TeachGuardian')}
      />

      <FeatureCard
        title="Explainable Agent Decisions"
        desc="See why alerts were triggered"
        action="View Safety Records"
        onPress={() => navigation.navigate('Records')}
      />

      <FeatureCard
        title="Privacy-First & Consent"
        desc="You control what is shared"
        action="Review Permissions"
        onPress={() => navigation.navigate('Permissions')}
      />
    </ScrollView>
  );
}

/* ---------- reusable card ---------- */
function FeatureCard({ title, desc, action, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDesc}>{desc}</Text>

      <View style={styles.actionRow}>
        <Text style={styles.actionText}>{action}</Text>
      </View>
    </TouchableOpacity>
  );
}

/* ---------- styles ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 18,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  cardDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 6,
  },
  actionRow: {
    marginTop: 12,
    alignItems: 'flex-end',
  },
  actionText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.primary,
  },
});
