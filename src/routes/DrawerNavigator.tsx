
import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParams, StackNavigator } from './StackNavigator';
import SetttingsScreen from '../screens/SetttingsScreen';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';


// export type RootDrawerParams = {
//     Tabs: undefined;
//     SetttingsScreen: undefined;
// }


const Drawer = createDrawerNavigator();



export const DrawerNavigator = () => {
    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator

            drawerContent={(props) => <MenuInterno {...props} />}
            screenOptions={{
                sceneContainerStyle: {
                    backgroundColor: 'white'
                },
                headerShown: true,

                // drawerType:{(width >= 700) ? 'permanent': 'front'}
            }}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SetttingsScreen" component={SetttingsScreen} />
        </Drawer.Navigator >
    );
}


const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView style={{}}>
            <View style={styles.avatarContainer} >
                <Image
                    source={{
                        uri: 'https://app.kits.ai/_next/image?url=https%3A%2F%2Farpeggi-prod-public.s3.us-west-2.amazonaws.com%2Fvoice-models%2Fimages%2FywDO51NwTGgUICukbFOXN.jpg&w=1920&q=75'
                    }}
                    style={
                        styles.avatar
                    }
                />
            </View>

            {/* Opciones de Menu */}
            <View style={styles.menuContainer} >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tabs')}
                    style={styles.menuBtn} >
                    <Text style={styles.menuText} >Tabs</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SetttingsScreen')}
                    style={styles.menuBtn} >
                    <Text style={styles.menuText} >Ajustes</Text>
                </TouchableOpacity>
            </View>



        </DrawerContentScrollView>



    );
}