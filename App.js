import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from './components/Theme';
import MainMenuScreen from './screens/mainMenuScreen';
import GameScreen from './screens/gameScreen';
import GameOverScreen from './screens/gameOverScreen'; 
import HighscoreScreen from './screens/highscoreScreen';
import OptionScreen from './screens/optionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='MainMenu'>
                    <Stack.Screen
                        name='MainMenu'
                        component={MainMenuScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Game'
                        component={GameScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='GameOver'
                        component={GameOverScreen} 
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Highscore'
                        component={HighscoreScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Options'
                        component={OptionScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}
