import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import SocialSignInButtons from "../../Components/SocialSignInButtons/SocialSignInButtons";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onConfirmCodePressed = () => {
    console.warn("onConfirmCodePressed");

  };

  const onSignInPressed = () => {
    console.warn("Sign in ");
  };

  const onSubmitPressed = () => {
    console.warn("onSubmitPressed ");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Code"
          value={code}
          setValue={setCode}
          secureTextEntry
        />
        <CustomInput
          placeholder="Enter your New Password"
          value={newPassword}
          setValue={setNewPassword}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} />
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

export default NewPasswordScreen;
