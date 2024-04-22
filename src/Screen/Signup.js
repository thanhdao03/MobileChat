import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import CustomButton from "../common/CustomButton";
import CustomTextInput from "../common/CustomTextInput";
import COLORS from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [BadName, setBadName] = useState(false);
  const [password, setPassWord] = useState("");
  const [BadPassWord, setBadPassWork] = useState(false);
  const [repassword, setRePassword] = useState("");
  const [BadRePassWord, setBadRePassWord] = useState(false);
  const [BadRechecked, setBadReCechked] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  dangKi = () => {
    if (name) {
      setBadName(false);
    } else {
      setBadName(true);
      setErrMessage("Vui lòng nhập họ và tên");
      return;
    }
    if (password) {
      setBadPassWork(false);
    } else {
      setBadPassWork(true);
      setErrMessage("Vui lòng nhập mật khẩu của bạn");
      return;
    }
    if (repassword) {
      if (repassword !== password) {
        setBadRePassWord(true);
        setErrMessage("Nhập lại mật khẩu không chính xác");
      } else {
        setBadRePassWord(false);
      }
    } else {
      setBadRePassWord(true);
      setErrMessage("Vui lòng nhập mật khẩu của bạn");
      return;
    }
    navigation.navigate("Login");
  };
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.color5, COLORS.color4]}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: 20,
            alignSelf: "flex-start",
            fontSize: 30,
            fontWeight: 'bold',
            color: COLORS.black,
            marginBottom: 100,
            marginLeft: 20,
          }}
        >
          Bkav Chat
        </Text>
        <Text style={{ marginLeft: 22, fontSize: 20 }}>Username</Text>
        <CustomTextInput
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          placeholder={""}
          icon={require("../Screen/image/user.png")}
        ></CustomTextInput>
        {BadName == true && (
          <Text style={{ marginTop: 10, marginLeft: 40, color: "red" }}>
            {errMessage}
          </Text>
        )}

        {BadRechecked == true && (
          <Text style={{ marginTop: 10, marginLeft: 40, color: "red" }}>
            {errMessage}
          </Text>
        )}
        <View style={{ position: "relative" }}>
          <Text style={{ marginLeft: 22, fontSize: 20, marginTop: 20 }}>
            PassWord
          </Text>

          <CustomTextInput
            value={password}
            onChangeText={(text) => {
              setPassWord(text);
            }}
            placeholder={""}
            icon={require("../Screen/image/pass.png")}
          ></CustomTextInput>
        </View>
        {BadPassWord == true && (
          <Text style={{ marginTop: 10, marginLeft: 40, color: "red" }}>
            {errMessage}
          </Text>
        )}
        <View style={{ position: "relative" }}>
          <Text style={{ marginLeft: 22, fontSize: 20, marginTop: 20 }}>
            Comfirm PassWord
          </Text>

          <CustomTextInput
            value={repassword}
            onChangeText={(text) => {
              setRePassword(text);
            }}
            placeholder={""}
            icon={require("../Screen/image/pass.png")}
          ></CustomTextInput>
        </View>
        {BadRePassWord == true && (
          <Text style={{ marginTop: 10, marginLeft: 40, color: "red" }}>
            {errMessage}
          </Text>
        )}
        <CustomButton
          title={"Signup"}
          onPress={() => {
            dangKi("Login");
          }}
        ></CustomButton>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "800",
            alignSelf: "center",
            marginTop: 20,
            textDecorationLine: "underline",
            marginBottom: 50,
          }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          {""}
          Already Have Account
        </Text>
      </View>
    </LinearGradient>
  );
};
export default Signup;
