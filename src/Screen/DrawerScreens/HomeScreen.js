
import React ,{useState, useEffect}from 'react';
import {View, Text, SafeAreaView,TouchableOpacity, StyleSheet,} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
 
const HomeScreen = () => {
  const [userdata, setUserData] = useState('');
  const [dflag, setdflag] = useState(false);
  useEffect(async() => {
      const userData = JSON.parse(await AsyncStorage.getItem('user_id')).AsyncStorage.then((value) =>
      setUserData(value));
    }, []);
   
    const getdetail=()=>{
   setdflag(!dflag);
    }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
      <TouchableOpacity
             style={styles.buttonStyle}
             activeOpacity={0.5}
              onPress={getdetail}>
              <Text >Get user details</Text>
            </TouchableOpacity>
            {dflag=='true' &&
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
            {{userdata}}
          
          </Text>
   
        </View>}
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
         Simple login React Native
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

export default HomeScreen;

const styles = StyleSheet.create({
 
  buttonStyle: {
    backgroundColor: 'pink',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },

});