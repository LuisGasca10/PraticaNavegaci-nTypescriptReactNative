import { Text, View } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IconButton from '../components/IconButton';
import { AuthContext } from '../context/AuthContext';



const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();
    const { authState } = useContext(AuthContext);

    useEffect(() => {
        console.log('Tables Screen 1');


    }, [])


    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: 10 + top
        }}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                {
                    (authState.isLoggedIn) ?
                        (<>
                            <IconButton name='airplane-outline' />
                            <IconButton name='attach-outline' />
                            <IconButton name='bonfire-outline' />
                            <IconButton name='calculator-outline' />
                            <IconButton name='chatbubble-ellipses-outline' />
                            <IconButton name='images-outline' />
                            <IconButton name='leaf-outline' />
                        </>)
                        :
                        (<Text> Primero debe iniciar sesion</Text>)
                }


            </Text>




        </View>
    )
}

export default Tab1Screen

