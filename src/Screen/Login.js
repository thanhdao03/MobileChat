import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import Checkbox from "expo-checkbox";
import COLORS from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Text,
  View,
  Pressable,
} from "react-native";
import CustomButton from "../common/CustomButton";
import CustomTextInput from "../common/CustomTextInput";

const Login = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("thanhdao02dd@gmail.com");
  const [pass, setPass] = useState("12345678");
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const validate = () => {
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
          marginTop: 10,
          alignSelf: "flex-start",
          fontSize: 30,
          fontWeight: 600,
          color: COLORS.white,
          marginBottom:200,
          marginLeft:30
        }}
      >
        Bkav Chat
      </Text>
      <Text style={{marginLeft:52, fontSize:20}}>Tai Khoan</Text>
      <CustomTextInput
        placeholder={""}
        icon={require("../Screen/image/email.png")}
        value={name}
        onChangeText={setName}
      ></CustomTextInput>

      <View style={{ position: "relative" }}>
      <Text style={{marginLeft:52, fontSize:20,marginTop:20}}>Mat khau</Text>
        <CustomTextInput
          value={pass}
          onChangeText={setPass}
          placeholder={""}
          icon={require("../Screen/image/pass.png")}
        >
        </CustomTextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          flexDirection:'row-reverse',
          marginRight:40
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
        style={{}}
        title={"Login"}
        bgColor={"white"}
        textColor={"black"}
        onPress={() =>{navigation.navigate('MainChat')}
        // => navigation.navigate('MainChat')
        }
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
