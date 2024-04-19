import React from "react";
import { useState } from "react";
import { SafeAreaView, View, Text, Image, Pressable } from "react-native";
const ChatDetail = ({ navigation }) => {
  const handle = () => {};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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
            padding: 40,
            width: 70,
            height: 70,
          }}
          source={require("../images/image1.png")}
        />
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nguyen Van A</Text>
          <Text>Dang hoat dong</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ChatDetail;
