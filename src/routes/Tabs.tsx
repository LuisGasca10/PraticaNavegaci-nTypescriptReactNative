import React, { useContext } from 'react';
import IonIcons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors, styles } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTaps } from './TopTabs';
import { AuthContext } from '../context/AuthContext';

const BottomsTabIOS = createBottomTabNavigator();


export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIos />
        : <TabsANDROID />
}




export const TabsIos = () => {
    return (
        <BottomsTabIOS.Navigator
            sceneContainerStyle={
                {
                    backgroundColor: 'white'
                }
            }


            screenOptions={({ route }) => ({


                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0

                }
                , tabBarIcon: ({ color, focused, size }) => {
                    // let iconName: string;
                    switch (route.name) {
                        case 'Tab1Screen': return <IonIcons name={'logo-github'} color={color} size={size} />

                        case 'Tab2Screen': return <IonIcons name={'logo-chrome'} color={color} size={size} />

                        case 'StackNavigator': return <IonIcons name={'menu'} color={color} size={size} />

                        default:
                            break;
                    }
                    <IonIcons />

                }
            })}

        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: ({ color, size, focused }) => (<Text style={{ color: color }}>{(focused) ? 'T1' : 't1'}</Text>) }} component={Tab1Screen} /> */}

            <BottomsTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab ' }} component={Tab1Screen} />
            <Tab.Screen name="Top" options={{ title: 'Top Taps' }} component={TopTaps} />
            <BottomsTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomsTabIOS.Navigator>
    );
}



const Tab = createMaterialBottomTabNavigator();



export const TabsANDROID = () => {

    const { authState } = useContext(AuthContext);

    return (
        <Tab.Navigator
            initialRouteName='StackNavigator'

            // sceneAnimationEnabled
            barStyle={{
                height: 70,
                backgroundColor: colors.primary,
            }}
            screenOptions={({ route }) => ({

                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {

                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0

                }
                , tabBarIcon: ({ color, focused }) => {

                    // let iconName: string;
                    switch (route.name) {
                        case 'Tab1Screen': return <IonIcons name={authState.favoriteIcon} color={color} size={20} />

                        case 'Top': return <IonIcons name={authState.favoriteIcon} color={color} size={20} />

                        case 'StackNavigator': return <IonIcons name={authState.favoriteIcon} color={color} size={20} />

                        default:
                            break;
                    }


                }
            })}
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: ({ color, size, focused }) => (<Text style={{ color: color }}>{(focused) ? 'T1' : 't1'}</Text>) }} component={Tab1Screen} /> */}

            <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <Tab.Screen name="Top" options={{ title: 'Top Taps Android' }} component={TopTaps} />
            <Tab.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </Tab.Navigator>
    );
}