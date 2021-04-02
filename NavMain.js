import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeComponent from './HomeComponent'
import ListComponent from './ListComponent';
import QuestionComponent from './QuestionComponent';
import AnswerComponent from './AnswerComponent';

const Stack = createStackNavigator();

const NavMain = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Question" component={QuestionComponent} />
                <Stack.Screen name="Answer" component={AnswerComponent} />
                <Stack.Screen name="Home" component={HomeComponent} />
                <Stack.Screen name="List" component={ListComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavMain;