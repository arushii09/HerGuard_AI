import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from '../screens/SplashScreen';
import AuthScreen from '../screens/AuthScreen';
import DashboardScreen from '../screens/DashboardScreen';
import EmergencyActionScreen from '../screens/EmergencyActionScreen';
import FeaturesScreen from '../screens/FeaturesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SafetyCheckScreen from '../screens/SafetyCheckScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Features" component={FeaturesScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="SafetyCheck" component={SafetyCheckScreen} />
      <Stack.Screen name="EmergencyAction" component={EmergencyActionScreen} />
    </Stack.Navigator>
  );
}
