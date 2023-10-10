import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const ForgotPasswordScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onSendPressed = async (data) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.forgotPassword(data.username);
      Alert.alert("Sent", "Code has been sent to your mail Id");
      navigation.navigate("NewPassword", {username:data.username});
    } catch (e) {
      Alert.alert("Oops", 'Username is not found');
    }
    setLoading(false);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username should be minimum 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Username should be maximum 24 characters long",
            },
          }}
        />
        <CustomButton
          text={loading ? "Loading..." : "Send"}
          onPress={handleSubmit(onSendPressed)}
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

export default ForgotPasswordScreen;
