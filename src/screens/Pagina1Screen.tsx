import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { Props } from '../interfaces/interfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props1 extends DrawerScreenProps<any, any> { }
const Pagina1Screen = ({ navigation }: Props1) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button onPress={() => { navigation.toggleDrawer() }} title="Menu" />
            ),
        });
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title} >Pagina 1</Text>
            <Button
                title='Ir pagina 2'
                onPress={() => navigation.navigate('pagina2')}
            />

            <Text>Navegar con argumentos</Text>


            <View style={
                { flexDirection: 'row' }
            }>

                <TouchableOpacity
                    style={{ ...styles.botonGrande, backgroundColor: 'green' }}
                    onPress={() => navigation.navigate('persona', {
                        id: 1,
                        nombre: 'Luis'
                    })}
                >
                    <Text style={styles.btnGrandeTexto}>Luis</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botonGrande}
                    onPress={() => navigation.navigate('persona', {
                        id: 2,
                        nombre: 'Madrid'
                    })}
                >
                    <Text style={styles.btnGrandeTexto}>HALA MADRID!!</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default Pagina1Screen

