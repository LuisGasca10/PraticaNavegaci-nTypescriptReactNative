import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, styles } from '../theme/appTheme';
import IonIcons from '@expo/vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTaps = () => {

    const { top: paddingTop } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            sceneContainerStyle={
                { backgroundColor: 'white' }
            }
            style={{
                height: 50,
                paddingTop,
                backgroundColor: 'white',
            }}



            screenOptions={({ route }) => ({
                tabBarItemStyle: {
                    height: 50
                },
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: 'grey',
                tabBarPressColor: colors.primary,
                tabBarStyle: {
                    elevation: 0,
                }
                , tabBarIcon: ({ color, focused }) => {

                    // let iconName: string;
                    switch (route.name) {
                        case 'Chat': return <IonIcons name={'chatbox'} color={color} size={24} />

                        case 'Contacts': return <IonIcons name={'person-circle'} color={color} size={24} />

                        case 'Album': return <IonIcons name={'albums'} color={color} size={24} />

                        default:
                            break;
                    }


                }
            })}

        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Album" component={AlbumScreen} />
        </Tab.Navigator>
    );
}