import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Modal, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import JournalEntriesScreen from '../screens/JournalEntriesScreen';
import ContentScreen from '../screens/ContentScreen';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        // You can also use initialRouteName='Home' inside Stack.Navigator but by default first route is picked
        <Stack.Navigator>
            <Stack.Screen
            name='HomeScreen' 
            component={HomeScreen}
            options={{
                title: 'Login',
                headerTitleAlign: 'center',
                headerTintColor: 'blue',
                headerStyle:{
                backgroundColor: 'lightblue'
                }
            }}
            />
            <Stack.Screen 
            name='JournalEntriesScreen' 
            component={JournalEntriesScreen} 
            options={{
                title: 'Journals',
                headerStyle:{
                backgroundColor: 'skyblue'
                },
                headerTitleStyle:{
                fontSize: 25,
                color: 'red'
                },
                headerTitleAlign: 'center'
            }}
            
            />
            <Stack.Screen 
            name='ContentScreen' 
            component={ContentScreen} 
            options={{
                title: 'Journal Content',
                headerStyle:{
                backgroundColor: 'skyblue'
                },
                headerTitleStyle:{
                fontSize: 25,
                color: 'red'
                },
                headerTitleAlign: 'center'
            }}
            />
      </Stack.Navigator>
    );
}

export default AppNavigator;
