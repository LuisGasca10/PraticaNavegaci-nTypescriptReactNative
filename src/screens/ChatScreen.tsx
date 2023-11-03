import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

const ChatScreen = () => {

    const { authState, setUserName } = useContext(AuthContext);
    let textSave: string;
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>ChatScreen</Text>
            <TextInput
                style={{ marginBottom: 10 }}
                placeholder='Username'
                onChangeText={(text) => {

                    textSave = text
                    console.log(textSave);
                }}
            />

            {authState.isLoggedIn && (<Button
                title='Guardar'
                onPress={() => {
                    setUserName(textSave)
                }}
                disabled={(authState.username) ? true : false}
            />)}

            {authState.username && (<Text>Bienvenido! {authState.username}</Text>)}
        </View>
    )
}

export default ChatScreen

