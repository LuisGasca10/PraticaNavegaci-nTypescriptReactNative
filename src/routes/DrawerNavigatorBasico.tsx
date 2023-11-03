
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import SetttingsScreen from '../screens/SetttingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorBasico = () => {
    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
                // drawerType:{(width >= 700) ? 'permanent': 'front'}
            }}
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SetttingsScreen" options={{ title: 'Settings' }} component={SetttingsScreen} />
        </Drawer.Navigator >
    );
}