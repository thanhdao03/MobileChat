import React from "react";
import { useState } from "react";
import {
  View,
  SafeAreaView,
  Pressable,
  Button,
  Text,
  Modal,
  Image,
} from "react-native";
const InfoUser = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => navigation.navigate("MainChat")}>
          <Image
            style={{ alignSelf: "flex-start", margin: 15 }}
            source={require("../images/image5.png")}
          ></Image>
        </Pressable>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 18,
          }}
        >
          Thong tin ca nhan
        </Text>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Image
          source={require("../images/imgytb.png")}
          style={{
            alignSelf: "center",
            marginTop: 30,
            width: 200,
            height: 200,
            borderRadius: 120,
          }}
        />
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ margin: 10, fontSize: 25 }}>Username :</Text>
            <Text style={{ margin: 10, fontSize: 25 }}>Nguyen Van A</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ margin: 10, fontSize: 25 }}>Email :</Text>
            <Text style={{ margin: 10, fontSize: 25 }}>
              Daohacker41@gmail.com
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ margin: 10, fontSize: 25 }}>Phone Number :</Text>
            <Text style={{ margin: 10, fontSize: 25 }}>0979022810</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default InfoUser;
