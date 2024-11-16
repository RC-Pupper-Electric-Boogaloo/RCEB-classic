import React, { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import DarkTheme from '../styles/theme';
import { useTheme } from '../components/Theme';


export default function MainMenuScreen({ navigation }) {

  const { isDarkMode, toggleDarkMode, setIsDarkMode } = useTheme();
  const styles = DarkTheme(isDarkMode);

  
  return (
    <View style={styles.container}>
      <View style={styles.containerMainMenu}>
      <Text style={styles.title}>RC Pupper -classic</Text>
        <TouchableOpacity style={styles.ButtonMainMenu} onPress={() => { navigation.navigate('Game') }}>
          <Text style={styles.ButtonMainMenuText}>PLAY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonMainMenu} onPress={() => { navigation.navigate('Highscore') }}>
          <Text style={styles.ButtonMainMenuText}>HIGHSCORES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonMainMenu} onPress={() => navigation.navigate('Options')}>
          <Text style={styles.ButtonMainMenuText}>OPTIONS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};