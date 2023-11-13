import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import LoginScreen from '../Quizz/login'
import ProfileSelectionScreen from './profiles';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Spelerscreen from './Spelerscreen';

const Stack = createStackNavigator();

const source = {
  html: `
 <p>HTDV</p>`
};

export default function App() {
  const { width } = useWindowDimensions();
  return (
    
    <View style={styles.container}>
       <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ProfileSelection" component={ProfileSelectionScreen} />
        <Stack.Screen name="SpelerScreen" component={Spelerscreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
      <Text>Main</Text>
      <StatusBar style="auto" />
      <RenderHtml contentWidth={width} source={source}/>
      <LoginScreen/>
      <ProfileSelectionScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
