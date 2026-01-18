import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Auth');
    }, 1500);
  }, []);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:22 }}>HerGuard AI</Text>
      <Text>Loading...</Text>
    </View>
  );
}
