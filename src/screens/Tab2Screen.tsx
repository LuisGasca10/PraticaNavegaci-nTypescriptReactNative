import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Tab2Screen = () => {
    useEffect(() => {
        console.log('Tables Screen 2');


    }, [])

    return (
        <View>
            <Text>Tab2Screen</Text>
        </View>
    )
}

export default Tab2Screen

const styles = StyleSheet.create({})