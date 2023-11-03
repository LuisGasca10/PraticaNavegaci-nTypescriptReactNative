import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { Props } from '../interfaces/interfaces'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../routes/StackNavigator'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthContext } from '../context/AuthContext'


// interface RouterParams {
//     id: number;
//     nombre: string;
// }
interface PropsPersonaScreen extends StackScreenProps<RootStackParams, 'persona'> { }

const PersonaScreen = ({ navigation, route }: PropsPersonaScreen) => {

    const params = route.params;

    const { setUserName } = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })

    }, [])

    useEffect(() => {
        setUserName(params.nombre);
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>


            <TouchableOpacity
                onPress={() => navigation.navigate('pagina3')}
            >
                <Text>Pagina 3</Text>
            </TouchableOpacity>

        </View>
    )
}

export default PersonaScreen