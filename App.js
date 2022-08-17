import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/HomeScreen';
import Create from './components/CreateNote';
import {  StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{...styles, title: 'To Do' }}
        />
        <Stack.Screen
        name='Add New'
        component={Create}
        options={{...styles.headerStyle }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
      );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#00008B',
  },
  headerTintColor: '#fff'

})