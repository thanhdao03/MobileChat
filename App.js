import Login from "./src/Screen/Login";
import Signup from "./src/Screen/Signup";
import MainChat from "./src/Screen/MainChat";
import Welcome from "./src/Screen/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MainChat" component={MainChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
