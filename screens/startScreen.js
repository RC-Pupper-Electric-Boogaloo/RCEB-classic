import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function StartScreen({ navigation }) {

    return (
        <ImageBackground
            source={require('../assets/Taustakuva.jpg')}
            style={styles.background}
        >
            <View style={styles.container}>
                <TouchableOpacity style={styles.startButton} onPress={() => { navigation.navigate('MainMenu') }}>
                    <Text style={styles.startButtonText}>START</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    startButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    startButtonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
