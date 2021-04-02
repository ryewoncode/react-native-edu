import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeComponent from './HomeComponent'
import ListComponent from './ListComponent';

const Stack = createStackNavigator();

const NavMain = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeComponent} />
                <Stack.Screen name="List" component={ListComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavMain;