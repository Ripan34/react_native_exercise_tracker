import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddWorkout from './AddWorkout';
import Settings from './Settings';
import Calender from './Calender';
import { Octicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
        }}
        initialRouteName="AddWorkout"
        >
            <Tab.Screen name="Calender" options={{tabBarIcon: ({ color, size })=>  <FontAwesome name="calendar" size={30} color="black" />
}} component={Calender} />
            <Tab.Screen name="AddWorkout" options={{tabBarIcon: ({ color, size })=> <Octicons name="home" size={30} color="black" />
}} component={AddWorkout} />
            <Tab.Screen name="Settings" options={{tabBarIcon: ({ color, size })=> <Feather name="settings" size={30} color="black" />}} component={Settings} />

        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});
export default Home;
