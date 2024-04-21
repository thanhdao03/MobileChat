import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import CustomButton from "../common/CustomButton";
import CustomTextInput from "../common/CustomTextInput";
import COLORS from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const Signup = () => {
  const [showPassWord, setShowPass] = useState(true);
  const [showPassWord1, setShowPass1] = useState(true);
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [BadName, setBadName] = useState(false);
  const [password, setPassWord] = useState("");
  const [BadPassWord, setBadPassWork] = useState(false);
  const [repassword, setRePassword] = useState("");
  const [BadRePassWord, setBadRePassWord] = useState(false);
  const [BadRechecked, setBadReCechked] = useState(false);

  const [checked, setChecked] = useState("");
  const [err, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  showPass = () => {
    setShowPass(!showPassWord);
  };
  // showPass1 = () => {
  //   setShowPass1(!showPassWord1);
  // };
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
    const data = {
      tenThanhVien: name,
      matKhau: repassword,
    };
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
            marginTop: 10,
            alignSelf: "flex-start",
            fontSize: 30,
            fontWeight: 600,
            color: COLORS.black,
            marginBottom: 100,
            marginLeft: 30,
          }}
        >
          Bkav Chat
        </Text>
        <Text style={{ marginLeft: 52, fontSize: 20 }}>Username</Text>
        <CustomTextInput
          style={{ outlineStyle: "none" }}
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
          <Text style={{ marginLeft: 52, fontSize: 20, marginTop: 20 }}>
            PassWord
          </Text>

          <CustomTextInput
            style={{ outlineStyle: "none" }}
            value={password}
            onChangeText={(text) => {
              setPassWord(text);
            }}
            // type={showPassWord1 ? "password" : "texxt"}
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
          <Text style={{ marginLeft: 52, fontSize: 20, marginTop: 20 }}>
            Comfirm PassWord
          </Text>

          <CustomTextInput
            style={{ outlineStyle: "none" }}
            value={repassword}
            onChangeText={(text) => {
              setRePassword(text);
            }}
            // type={showPassWord ? "password" : "text"}
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
          style={{ outlineStyle: "none" }}
          title={"Signup"}
          bgColor={"white"}
          textColor={"black"}
          onPress={() => {
            dangKi();
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
const styles = StyleSheet.create({});
export default Signup;
