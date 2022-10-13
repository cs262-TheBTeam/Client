import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/home.jsx";
import QuestionScreen1 from "./screens/question1.jsx";
import QuestionScreen2 from "./screens/question2.jsx";
import QuestionScreen3 from "./screens/question3.jsx";
import ResultsScreen1 from "./screens/results1.jsx";
import ResultsScreen2 from "./screens/results2.jsx";
import ResultsScreen3 from "./screens/results3.jsx";
import FinalScreen from "./screens/final.jsx";
import LeaderboardScreen from "./screens/leaderboard.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="question1" component={QuestionScreen1} />
        <Stack.Screen name="question2" component={QuestionScreen2} />
        <Stack.Screen name="question3" component={QuestionScreen3} />
        <Stack.Screen name="results1" component={ResultsScreen1} />
        <Stack.Screen name="results2" component={ResultsScreen2} />
        <Stack.Screen name="results3" component={ResultsScreen3} />
        <Stack.Screen name="final" component={FinalScreen} />
        <Stack.Screen name="leaderboard" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
