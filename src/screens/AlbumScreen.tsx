import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

const AlbumScreen = () => {
    const { authState, logOut } = useContext(AuthContext)
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>AlbumScreen</Text>

            {
                authState.isLoggedIn &&
                <Button
                    title='Log out'
                    onPress={logOut}
                // disabled={(authState.isLoggedIn) ? true : false}
                />
            }

        </View>
    )
}

export default AlbumScreen
