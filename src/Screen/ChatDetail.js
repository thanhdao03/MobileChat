import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
} from "react-native";
const ChatDetail = ({ navigation }) => {
  const handle = () => {};
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => navigation.navigate("MainChat")}>
            <Image
              style={{ alignSelf: "flex-start", margin: 15 }}
              source={require("../images/image5.png")}
            ></Image>
          </Pressable>
          <Image
            style={{
              alignSelf: "flex-start",
              margin: 8,
              width: 70,
              height: 70,
            }}
            source={require("../images/image1.png")}
          />
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Nguyen Van A
            </Text>
            <Text>Dang hoat dong</Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "transparent",
            // flexDirection: "row",
          }}
        >
          <View
            style={{
              borderWidth: 0.5,
              height: 35,
              margin: 10,
              backgroundColor: "#F2F4F4",
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={{
                outlineStyle: "none",
                margin: 5,
                width: "100%",
              }}
              placeholder="Nhap tin nhan"
            ></TextInput>
            <Image
              source={require("../images/send.png")}
              style={{
                width: 25,
                height: 25,
                marginRight: 4,
                alignSelf: "center",
              }}
            />
            <Image
              style={{
                width: 25,
                height: 25,
                marginRight: 4,
                alignSelf: "center",
              }}
              source={require("../images/icon.png")}
            />
            <Image
              style={{
                width: 25,
                height: 25,
                marginRight: 4,
                alignSelf: "center",
              }}
              source={require("../images/url.png")}
            />
            <Image
              style={{
                width: 25,
                height: 25,
                marginRight: 4,
                alignSelf: "center",
              }}
              source={require("../images/thumuc.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ChatDetail;
