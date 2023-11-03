import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';


const ContactsScreen = () => {


    const { signIn, authState, logOut } = useContext(AuthContext)


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>ContactsScreen</Text>
            {
                !authState.isLoggedIn &&
                <Button
                    title='Sign in'
                    onPress={signIn}
                // disabled={(authState.isLoggedIn) ? true : false}
                />
            }





        </View>
    )
}

export default ContactsScreen

