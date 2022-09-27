import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import AddWorkout from './components/AddWorkout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Settings from './components/Settings';
import ConfirmWorkout from './components/ConfirmWorkout';
import WorkoutModal from './components/WorkoutModal';
import { SafeAreaView } from 'react-native-safe-area-context';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/logo.png'),
      require('./assets/arms.png'),
      require('./assets/back.gif'),
      require('./assets/cardio.png'),
      require('./assets/chest.png'),
      require('./assets/shoulder.png'),
      require('./assets/legs.png'),
    ]);
    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddWorkout" component={AddWorkout} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="workoutModal" component={WorkoutModal} />
        <Stack.Screen name="confirm" component={ConfirmWorkout} />

        
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}