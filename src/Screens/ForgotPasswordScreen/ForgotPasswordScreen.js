import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");

  const onConfirmCodePressed = () => {
    console.warn("onConfirmCodePressed");
  };

  const onSignInPressed = () => {
    console.warn("Sign in ");
  };

  const onSendPressed = () => {
    console.warn("onSendPressed ");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomButton text="Send" onPress={onSendPressed} />
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
