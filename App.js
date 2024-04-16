import Login from "./src/Login";
import Signup from "./src/Signup";
import MainChat from "./src/MainChat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MainChat" component={MainChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
