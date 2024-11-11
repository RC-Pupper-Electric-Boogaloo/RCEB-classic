import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';
import BackgroundMusic, { usePlayCollisionSound, usePlayPointSound } from './components/BackgroundMusic';
import HighscoreScreen from './screens/highscoreScreen';

export default function App() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  const playCollisionSound = usePlayCollisionSound();
  const playPointSound = usePlayPointSound();
  const [showHighscores, setShowHighscores] = useState(false);

  useEffect(() => {
    setRunning(false);
  }, []);

  const handleShowHighScores = () => {setShowHighscores(true);
};
  return (
    <View style={{ flex: 1 }}>
                 {showHighscores ? (
                <HighscoreScreen points={currentPoints} onReturn={() => setShowHighscores(false)} />
            ) : (
                <>
      <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', margin: 20 }}>{currentPoints}
      </Text>
      
      <BackgroundMusic />
      <GameEngine
        ref={(ref) => { setGameEngine(ref); }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          switch (e.type) {
            case 'game_over':
              playCollisionSound();
              setRunning(false);
              gameEngine.stop();
              handleShowHighScores();
              break;
            case 'new_point':
              playPointSound();
              setCurrentPoints(currentPoints + 1);
              break;
          }
        }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>
      {!running ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{ backgroundColor: 'black', paddingHorizontal: 30, paddingVertical: 10 }}
            onPress={() => {
              setCurrentPoints(0);
              setRunning(true);
              gameEngine.swap(entities());
              gameEngine.start();
            }}>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30 }}>
              START GAME
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      </>
    )}
    </View>
  );
}
