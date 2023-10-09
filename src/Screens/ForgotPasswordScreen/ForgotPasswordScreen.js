import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();
  const {control, handleSubmit}= useForm();

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onSendPressed = () => {
    navigation.navigate("NewPassword");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Username"
          name='username'
          control={control}
          rules={{required: 'Username is required', minLength: {value:3, message:'Username should be 3 characters long'}, maxLength: {value:24, message:'Username should be 24 characters long'}}}
        />
        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />
        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 25,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default ForgotPasswordScreen;
