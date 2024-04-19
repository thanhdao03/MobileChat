import React from "react";
import { View, Text, Image,SafeAreaView ,TextInput} from "react-native";
import { useState } from "react";

const MainChat = () => {
  const handleMsg = () => {};

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',}} >
      <Text style={{padding:20, fontSize:30,fontWeight:'bold'}}>Bkav Chat</Text>
      <Image style={{alignSelf:'flex-end',marginBottom:20,margin:5}} source={require('../images/image.png')}/>
      </View>
       <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <Image style={{width:10}} source={require('../images/image4.png') }></Image>
        <TextInput style={{borderWidth:1,borderRadius:4,width:400,height:35,marginTop:20}} placeholder="Search Friend" ></TextInput>
      </View>
    </SafeAreaView>
  );
};
export default MainChat;
