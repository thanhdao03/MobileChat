import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
const CustomButton = ({ onPress, title, bgColor, textColor }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <View style={{ paddingHorizontal: 22 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#E1E8EB",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 40,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 50,
          opacity: pressed ? 0.4 : 1,
        }}
        onPress={() => {
          onPress();
          setPressed(false);
        }}
        onPressOut={() => setPressed(false)}
      >
        <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomButton;
