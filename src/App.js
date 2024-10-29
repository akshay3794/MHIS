import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from './components/screens/SplashScreen';
import HomeScreen from './components/screens/HomeScreen';
import Properties from './components/screens/Properties';
import Profile from './components/screens/Profile';
import ChangePassword from './components/screens/ChangePassword';
import AboutUs from './components/screens/AboutUs';
import Locations from './components/screens/Locations';
import ContactUs from './components/screens/ContactUs';
import SingleProperty from './components/common/SingleProperty';
import MemberLogin from './components/screens/MemberLogin';
import ForgotPassword from './components/screens/ForgotPassword';
import SideMenu from './components/common/SideMenu';
import {styles} from './css';
import Membership from './components/screens/Membership';
import Booking from './components/screens/Booking';
import Payment from './components/screens/Payment';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

let screenOption = {
  headerShown: false,
  drawerType: 'slide',
  drawerStyle: styles.drawerStyle,
};

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideMenu {...props} />}
      screenOptions={screenOption}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="Properties" component={Properties} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Locations" component={Locations} />
        <Stack.Screen name="Membership" component={Membership} />
        <Stack.Screen name="SingleProperty" component={SingleProperty} />
        <Stack.Screen name="MemberLogin" component={MemberLogin} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
