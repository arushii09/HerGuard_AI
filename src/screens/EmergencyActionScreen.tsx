import React from 'react';
import { View, Text } from 'react-native';

export default function EmergencyActionScreen() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:22, color:'red' }}>Emergency Mode</Text>
      <Text>Guardian alerted</Text>
    </View>
  );
}
