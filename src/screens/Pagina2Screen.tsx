import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { Props } from '../interfaces/interfaces'



const Pagina2Screen = ({ navigation: navigator }: Props) => {

    useEffect(() => {

        navigator.setOptions({
            headerLeft: () => (<Text>Hola Mundo</Text>),
            title: 'Hola Mundo',
            headerBackTitle: 'Atras'
        })

    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 2</Text>
            <Button
                title='Pagina 3'
                onPress={() => navigator.navigate('pagina3')}
            />
        </View>
    )
}

export default Pagina2Screen
