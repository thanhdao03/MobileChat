import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import Checkbox from "expo-checkbox";
import COLORS from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View, Pressable } from "react-native";
import CustomButton from "../common/CustomButton";
import CustomTextInput from "../common/CustomTextInput";
import { CommonActions } from "@react-navigation/native";
const Login = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("thanhdao02dd@gmail.com");
  const [BadName, setBadName] = useState(false);
  const [pass, setPass] = useState("12345678");
  const [BadPass, setBadPass] = useState(false);
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const dangnhap = () => {
    if (name) {
      setBadName(false);
    } else {
      setBadName(true);
      setErrMessage("Vui lòng nhập họ và tên");
      return;
    }
    if (pass) {
      setBadPass(false);
    } else {
      setBadPass(true);
      setErrMessage("Vui lòng nhập mật khẩu ");
      return;
    }
    if (pass) {
      setBadPass(false);
    } else {
      setBadPass(true);
      setErrMessage("Vui lòng nhập mật khẩu ");
      return;
    }
    navigation.navigate("MainChat");
  };
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.color5, COLORS.color4]}
    >
      <Text
        style={{
          alignSelf: "flex-start",
          fontSize: 30,
          fontWeight: 'bold',
          color: COLORS.black,
          marginBottom: 100,
          marginLeft:20,
          marginTop:20,
          marginRight:20
        }}
      >
        Bkav Chat
      </Text>
      <Text style={{ marginLeft: 22, fontSize: 20 }}>Username</Text>
      <CustomTextInput
        placeholder={""}
        icon={require("../Screen/image/email.png")}
        value={name}
        onChangeText={setName}
      ></CustomTextInput>
      {BadName == true && (
        <Text style={{ marginTop: 10, marginLeft: 40, color: "red" }}>
          {errMessage}
        </Text>
      )}
      <View style={{ position: "relative" }}>
        <Text style={{ marginLeft: 22, fontSize: 20, marginTop: 20 }}>
          Password
        </Text>
        <CustomTextInput
          value={pass}
          onChangeText={setPass}
          placeholder={""}
          icon={require("../Screen/image/pass.png")}
        ></CustomTextInput>
        {BadPass == true && (
          <Text style={{ marginTop: 10, marginLeft: 40, color: "red" }}>
            {errMessage}
          </Text>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          flexDirection: "row-reverse",
          marginRight: 40,
        }}
      >
        <Checkbox
          style={{ marginRight: 20 }}
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? COLORS.black : undefined}
        />
        <Text>Remember </Text>
      </View>
      {err == true && (
        <Text style={{ marginTop: 10, marginLeft: 40, color: "red" }}>
          {errMessage}
        </Text>
      )}
      <CustomButton
        title={"Login"}
        onPress={() => {
          dangnhap("");
        }}
      ></CustomButton>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: COLORS.grey,
            marginHorizontal: 10,
          }}
        />
        <Text style={{ fontSize: 14 }}>Or Login with</Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: COLORS.grey,
            marginHorizontal: 10,
          }}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            flex: 1,
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: 52,
            borderWidth: 1,
            borderColor: COLORS.grey,
            marginRight: 4,
            borderRadius: 10,
            marginLeft: 30,
          }}
        >
          <Image
            source={require("./image/facebook1.png")}
            style={{
              height: 36,
              width: 36,
              marginRight: 8,
            }}
            resizeMode="contain"
          />

          <Text>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: 52,
            borderWidth: 1,
            borderColor: COLORS.grey,
            marginRight: 4,
            borderRadius: 10,
            marginRight: 30,
          }}
        >
          <Image
            source={require("./image/google.png")}
            style={{
              height: 36,
              width: 36,
              marginRight: 8,
            }}
            resizeMode="contain"
          />

          <Text>Google</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default Login;
