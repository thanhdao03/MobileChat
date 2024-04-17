import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
const Signup = () => {
  const handleSignup = () => {};
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textHello}>Hello Again!</Text>
        <Text style={styles.textHello}>welcome back you've been missed</Text>
      </View>
      <TextInput
        style={styles.inputUsername}
        onChangeText={onChangeText}
        placeholder="Username"
      />
      <TextInput
        style={styles.inputPassWord}
        onChangeText={onChangeNumber}
        placeholder="Password"
      />
      <TextInput
        style={styles.inputPassWord}
        onChangeText={onChangeNumber}
        placeholder="Confirm Password"
        keyboardType=""
      />
      <TextInput
        style={styles.inputPassWord}
        onChangeText={onChangeNumber}
        placeholder="Email"
        keyboardType="email-address"
      />

      <div style={styles.btn0}>
        <TouchableOpacity
          // onPress={navigation.navigate("Signup")}
          style={styles.btn}
        >
          <Text>Signup</Text>
        </TouchableOpacity>
      </div>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textHello: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  inputUsername: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    marginTop: 50,
  },
  inputPassWord: {
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
export default Signup;
