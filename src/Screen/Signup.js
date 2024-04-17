import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
} from "react-native";
import CustomButton from "../common/CustomButton";
import CustomTextInput from "../common/CustomTextInput";
import { RadioButton } from "react-native-paper";
import COLORS from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const NewAccount = () => {
  const [showPassWord, setShowPass] = useState(true);
  const [showPassWord1, setShowPass1] = useState(true);
  const navigation = useNavigation();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [BadName, setBadName] = useState(false);
  const [email, setEmail] = useState("");
  const [BadEmail, setBadEmail] = useState(false);
  const [address, setAddress] = useState("");
  const [BadAddress, setBadAddress] = useState(false);
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
  showPass1 = () => {
    setShowPass1(!showPassWord1);
  };
  dangKi = () => {
    const phoneNumber =
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (phone) {
      if (phoneNumber.test(phone) === true) {
        setError(false);
      } else {
        setError(true);
        setErrMessage("Số điện thoại không đúng định dạng");
        return;
      }
    } else {
      setError(true);
      setErrMessage("Vui lòng nhập số điện thoại");
      return;
    }
    if (email) {
      if (regexEmail.test(email) === true) {
        setBadEmail(false);
      } else {
        setBadEmail(true);
        setErrMessage("Email không đúng định dạng");
        return;
      }
    } else {
      setBadEmail(true);
      setErrMessage("Vui lòng nhập email");
      return;
    }
    if (name) {
      setBadName(false);
    } else {
      setBadName(true);
      setErrMessage("Vui lòng nhập họ và tên");
      return;
    }
    if (address) {
      setBadAddress(false);
    } else {
      setBadAddress(true);
      setErrMessage("Vui lòng nhập địa chỉ của bạn");
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
      email: email,
      tenThanhVien: name,
      gioiTinh: checked,
      soDienThoai: phone,
      anhDaiDien: "",
      anhCK: "",
      diaChi: address,
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
            marginTop: 50,
            alignSelf: "center",
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          {" "}
          Hi Welcome Back ! 👋 Sign up
        </Text>
        <CustomTextInput
          value={phone}
          onChangeText={(text) => {
            setPhone(text);
          }}
          placeholder={"Xin Nhập Số Điện Thoại"}
          icon={require("../Screen/image/phone.png")}
        ></CustomTextInput>
        {err == true && (
          <Text style={{ marginTop: 10, marginLeft: 40, color: "red" }}>
            {errMessage}
          </Text>
        )}
        <CustomTextInput
          value={email}
          type="email"
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder={"Xin Nhập Email"}
          icon={require("../Screen/image/email.png")}
        ></CustomTextInput>
        {BadEmail == true && (
          <Text style={{ marginTop: 10, marginLeft: 40, color: "red" }}>
            {errMessage}
          </Text>
        )}
        <CustomTextInput
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          placeholder={"Nhập ho Tên"}
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
        <CustomTextInput
          value={address}
          onChangeText={(text) => {
            setAddress(text);
          }}
          placeholder={"Xin Nhập Địa Chỉ Của Bạn"}
          icon={require("../Screen/image/address.png")}
        ></CustomTextInput>
        {BadAddress == true && (
          <Text style={{ marginTop: 10, marginLeft: 40, color: "red" }}>
            {errMessage}
          </Text>
        )}
        <View style={{ position: "relative" }}>
          <CustomTextInput
            value={password}
            onChangeText={(text) => {
              setPassWord(text);
            }}
            type={showPassWord1 ? "password" : "texxt"}
            placeholder={"Xin Nhập Mật Khẩu"}
            icon={require("../Screen/image/pass.png")}
          ></CustomTextInput>

          <Pressable
            style={{ position: "absolute", right: 50, top: 30 }}
            onPress={() => showPass1()}
          >
            {showPassWord1 ? (
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Screen/image/eye.png")}
              />
            ) : (
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Screen/image/hidden.png")}
              />
            )}
          </Pressable>
        </View>
        {BadPassWord == true && (
          <Text style={{ marginTop: 10, marginLeft: 40, color: "red" }}>
            {errMessage}
          </Text>
        )}
        <View style={{ position: "relative" }}>
          <CustomTextInput
            value={repassword}
            onChangeText={(text) => {
              setRePassword(text);
            }}
            type={showPassWord ? "password" : "text"}
            placeholder={"Nhập Lại Mật Khẩu"}
            icon={require("../Screen/image/pass.png")}
          ></CustomTextInput>
          <Pressable
            style={{ position: "absolute", right: 50, top: 30 }}
            onPress={() => showPass()}
          >
            {showPassWord ? (
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Screen/image/eye.png")}
              />
            ) : (
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../Screen/image/hidden.png")}
              />
            )}
          </Pressable>
        </View>
        {BadRePassWord == true && (
          <Text style={{ marginTop: 10, marginLeft: 40, color: "red" }}>
            {errMessage}
          </Text>
        )}

        <CustomButton
          title={"Đăng kí"}
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
            navigation.goBack();
          }}
        >
          {" "}
          Already Have Account
        </Text>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  gioiTinh: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 25,
    marginLeft: 20,
    width: "80%",
    justifyContentc: "center",
    alignItems: "center",
  },
  text_GioiTinh: {
    fontSize: 16,
    marginRight: 15,
    fontWeight: "bold",
  },
});
export default NewAccount;
