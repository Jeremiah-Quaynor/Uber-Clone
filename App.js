import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}


// <SafeAreaView className="flex-1 items-center justify-center bg-red-500">
// <Text>Lets build Uber</Text>
// <StatusBar style="auto" />
// </SafeAreaView>