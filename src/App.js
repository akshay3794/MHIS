import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './components/screens/SplashScreen';
import HomeScreen from './components/screens/HomeScreen';
import Properties from './components/screens/Properties';
import AboutUs from './components/screens/AboutUs';
import ContactUs from './components/screens/ContactUs';
import SingleProperty from './components/common/SingleProperty';
import MemberLogin from './components/screens/MemberLogin';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={MyDrawer} />
            <Stack.Screen name="Properties" component={Properties} />
            <Stack.Screen name="SingleProperty" component={SingleProperty} />
            <Stack.Screen name="MemberLogin" component={MemberLogin} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}