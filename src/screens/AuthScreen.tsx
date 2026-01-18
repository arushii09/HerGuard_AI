import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function AuthScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HerGuard AI</Text>
      <Text style={styles.subtitle}>Stay Safe. Always.</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.replace('Dashboard')}
      >
        <Text style={styles.loginText}>Login / Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Privacy-first • No mic • No camera
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F472B6',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#FCE7F3',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
  },
  loginBtn: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#DB2777',
    fontSize: 16,
    fontWeight: '700',
  },
  footer: {
    textAlign: 'center',
    color: '#FCE7F3',
    fontSize: 12,
    marginTop: 30,
  },
});
