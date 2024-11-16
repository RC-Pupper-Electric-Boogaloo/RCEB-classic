import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useTheme } from '../components/Theme';

const GameOverScreen = ({ currentPoints, coinCount, onRestart, onShowHighscores, navigation }) => {
    const { isDarkMode } = useTheme();



    return (

            <View style={styles.container}>
                
                <Text style={styles.pointsText}>Your Score: {currentPoints}</Text> 

                <TouchableOpacity style={styles.button} onPress={onRestart}>
                    <Text style={styles.buttonText}>Play Again</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { marginTop: 10 }]} onPress={onShowHighscores}>
                    <Text style={styles.buttonText}>Highscores</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, { marginTop: 10 }]} 
                    onPress={() => navigation.goBack()} 
                >
                    <Text style={styles.buttonText}>Main Menu</Text>
                </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  
        padding: 20,
        borderRadius: 10,
    },
    gameOverText: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'red',
    },
    pointsText: {
        fontSize: 30,
        color: 'white',
        marginBottom: 20,
    },
    coinsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    coinImage: {
        width: 30,  
        height: 30, 
        marginRight: 10,
    },
    coinsText: {
        fontSize: 25,
        color: 'white',
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default GameOverScreen;
