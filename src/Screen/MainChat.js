import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import { useState } from "react";

const MainChat = ({ navigation }) => {
  const handleMsg = () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ padding: 20, fontSize: 30, fontWeight: "bold" }}>
          Bkav Chat
        </Text>
        <Image
          style={{
            alignSelf: "flex-end",
            marginBottom: 20,
            margin: 5,
          }}
          source={require("../images/image.png")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 2,
        }}
      >
        <Image
          style={{ width: 30, height: 30, marginTop: 12, marginRight: 8 }}
          source={require("../images/image4.png")}
        ></Image>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 4,
            width: 400,
            height: 35,
            marginTop: 20,
            backgroundColor: "#F2F4F4",
          }}
          placeholder="Search Friend"
        ></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 20, fontSize: 30, padding: 20 }}>
          Danh sách bạn bè
        </Text>
      </View>
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Pressable onPress={() => navigation.navigate("ChatDetail")}>
            <Image
              style={{ alignSelf: "flex-start", marginLeft: 20 }}
              source={require("../images/image1.png")}
            ></Image>
          </Pressable>

          <Text
            style={{
              marginLeft: 30,
              fontSize: 20,
              textAlign: "center",
              marginTop: 30,
            }}
          >
            Nguyen Van A
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={{ alignSelf: "flex-start", marginLeft: 20 }}
            source={require("../images/image1.png")}
          />
          <Text
            style={{
              marginLeft: 30,
              fontSize: 20,
              textAlign: "center",
              marginTop: 30,
            }}
          >
            Nguyen Van A
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={{ alignSelf: "flex-start", marginLeft: 20 }}
            source={require("../images/image1.png")}
          />
          <Text
            style={{
              marginLeft: 30,
              fontSize: 20,
              textAlign: "center",
              marginTop: 30,
            }}
          >
            Nguyen Van A
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={{ alignSelf: "flex-start", marginLeft: 20 }}
            source={require("../images/image1.png")}
          />
          <Text
            style={{
              marginLeft: 30,
              fontSize: 20,
              textAlign: "center",
              marginTop: 30,
            }}
          >
            Nguyen Van A
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default MainChat;
