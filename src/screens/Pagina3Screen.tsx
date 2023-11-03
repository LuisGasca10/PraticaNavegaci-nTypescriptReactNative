import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme';
import { Props } from '../interfaces/interfaces';



const Pagina3Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title} >Pagina 3</Text>

            <Button
                title='Pagina Anteriror'
                onPress={() => navigation.pop()}
            />

            <Button
                title='Home Page'
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default Pagina3Screen;

