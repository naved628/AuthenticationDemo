import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        secureTextEntry={secureTextEntry}
        style={styles.input} 
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    height:40,
    justifyContent:'center'
  },
  input: {
  },
});
export default CustomInput;
