import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/home.jsx";
import QuestionScreen from "./screens/question.jsx";
import ResultsScreen from "./screens/results.jsx";
import LeaderboardScreen from "./screens/leaderboard.jsx";
import HelpScreen from "./screens/help.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="question" component={QuestionScreen} />
        <Stack.Screen name="results" component={ResultsScreen} />
        <Stack.Screen name="leaderboard" component={LeaderboardScreen} />
        <Stack.Screen name="help" component={HelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
