
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
 
const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
           Simple login React Native
            {'\n\n'}
            This is the Settings Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Simple Login{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
      home
        </Text>
      </View>
    </SafeAreaView>
  );
};
 
export default SettingsScreen;
