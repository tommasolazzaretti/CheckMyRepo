import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import HomeScreen from './component/Home';
import CheckDataScreen from './component/CheckData';

const Stack = createNativeStackNavigator();

const App = () => {
  const netInfo = useNetInfo();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CheckData" component={CheckDataScreen} />
      </Stack.Navigator>
      <View style={netInfo?.isConnected ? styles.hide : null}>
        <Text>Check your internet connection</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hide: {
    display: 'none',
  },
});

export default App;
