import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function SafetyCheckScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you okay right now?</Text>
      <Text style={styles.desc}>
        This is a calm check-in. No alerts yet.
      </Text>

      <TouchableOpacity
        style={styles.safeBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.safeText}>👍 Yes, I'm Safe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.timeBtn}
        onPress={() => navigation.replace('EmergencyAction')}
      >
        <Text style={styles.timeText}>⏱ Need more time</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Non-alarming • User controlled
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDFA',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#065F46',
  },
  desc: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
    color: '#047857',
  },
  safeBtn: {
    backgroundColor: '#22C55E',
    paddingVertical: 14,
    borderRadius: 14,
    marginBottom: 12,
    alignItems: 'center',
  },
  safeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  timeBtn: {
    backgroundColor: '#E5E7EB',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  timeText: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '500',
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 12,
    color: '#6B7280',
  },
});
