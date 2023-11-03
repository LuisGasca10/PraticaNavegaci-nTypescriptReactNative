import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../routes/StackNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props extends DrawerScreenProps<any, any> { };


const SetttingsScreen = ({ navigation }: Props) => {

    const insest = useSafeAreaInsets();
    const { authState } = useContext(AuthContext);



    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insest.top
        }}>
            <Text
                style={styles.title}
            >SetttingsScreen</Text>

            <Text>

                {JSON.stringify(authState)}

            </Text>

        </View>
    )
}

export default SetttingsScreen

