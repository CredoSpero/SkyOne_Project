import * as React from 'react';
import { Text, View } from 'react-native';

export default function ShareScreen() {
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'lightblue',
      }}
      >
        <Text> Sharing is caring! </Text>
      </View>
    );
  }