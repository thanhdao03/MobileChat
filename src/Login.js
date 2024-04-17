import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./Signup";
const Login = ({ navigation }) => {
  const handleSignup = () => {};
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.div1}>Hello Again!</Text>
          <Text style={styles.div1}>welcome back you've been missed</Text>
        </View>
        <TextInput
          style={styles.input1}
          onChangeText={onChangeText}
          placeholder="Username"
        />
        <TextInput
          style={styles.input2}
          onChangeText={onChangeNumber}
          placeholder="Password"
        />
        <Text style={{ alignSelf: "flex-end", margin: 10 }}>
          Recovery Password
        </Text>
        <div style={styles.btn0}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MainChat")}
            style={styles.btn}
          >
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={styles.btn}
          >
            <Text>Signup</Text>
          </TouchableOpacity>
        </div>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "visible",
    backgroundColor: white,
  },
  div1: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  input1: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    marginTop: 50,
  },
  input2: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  btn: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#DDDDDD",
    height: 40,
    margin: 10,
  },
  btn0: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    width: 300,
    margin: 10,
  },
});

export default Login;
