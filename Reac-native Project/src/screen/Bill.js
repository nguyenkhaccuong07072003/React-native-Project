import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
export default function Bill() {
    return (
        <View>
            <TouchableOpacity style={styles.touchback}>
                <Ionicons name="arrow-back-sharp" size={30} color="black" onPress={() => navigation.navigate('Home')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    touchback: {
        paddingHorizontal: 10,
        marginTop: 50,
    },
})