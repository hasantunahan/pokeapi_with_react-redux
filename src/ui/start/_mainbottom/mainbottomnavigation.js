import React from 'react';
import { View, Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { themeColors } from '../../../core/extension/color';
import HomeView from '../../features/home/home';
import Test from '../../features/pokemondetail/test';

const Tab = createBottomTabNavigator();
const HomeNavigation = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: themeColors().background
        }} >
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    style: {
                        borderTopWidth: 0,
                        alignSelf: 'center',
                        width: '100%',
                        backgroundColor: themeColors().card,
                        borderTopLeftRadius: Platform.OS == "ios" ? 30 : 0,
                        borderTopRightRadius: Platform.OS == "ios" ? 30 : 0,
                        marginBottom: 0,
                        justifyContent: 'center'
                    },
                    labelPosition: 'beside-icon',
                    showLabel: false,
                    activeTintColor: themeColors().border,
                }}>
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons style={{ justifyContent: 'space-evenly', }} name="home-outline" color={color} size={size} />
                        ),
                    }}
                    name="Home"
                    component={HomeView} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons style={{ justifyContent: 'space-evenly', }} name="heart-outline" color={color} size={size} />
                        ),
                    }}
                    name="Favorite"
                    component={Test} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons style={{ justifyContent: 'space-evenly', }} name="help-buoy-outline" color={color} size={size} />
                        ),
                    }}
                    name="Home2"
                    component={Test} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons style={{ justifyContent: 'space-evenly', }} name="alert" color={color} size={size} />
                        ),
                    }}
                    name="Search"
                    component={Test} />


            </Tab.Navigator>
        </View>
    );
}


export default HomeNavigation;



