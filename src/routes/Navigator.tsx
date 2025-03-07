import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

export type RootStackParams  = {
    SplashScreen: undefined;
    LoginScreen: undefined;
    RegisterScreen: undefined;
    HomeScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
    return (
            <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }} >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
      );
}
