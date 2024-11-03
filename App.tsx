import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/pages/Home';
import Rozari from './src/pages/Rozari';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Rozari"
          component={Rozari}
          options={({route}) => ({
            title: `Matendo ya ${route.params?.tendo}` || 'Rozari',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
