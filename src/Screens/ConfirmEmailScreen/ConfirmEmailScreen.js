import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");

  const onConfirmCodePressed = () => {
    console.warn("onConfirmCodePressed");
  };

  const onSignInPressed = () => {
    console.warn("Sign in ");
  };

  const onResendCodePressed = () => {
    console.warn("onResendCodePressed ");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>
        <CustomInput
          placeholder="Enter your Confirmation Code"
          value={code}
          setValue={setCode}
          secureTextEntry
        />
        <CustomButton text="Confirm" onPress={onConfirmCodePressed} />
          <CustomButton
            text="Resend code"
            onPress={onResendCodePressed}
            type="SECONDARY"
          />
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

export default ConfirmEmailScreen;
