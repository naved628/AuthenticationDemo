import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import SocialSignInButtons from "../../Components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const SignUpScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const OnRegisterPressed = async (data) => {
    const { username, password, email, name } = data;

    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, name, preferred_username: username },
      });
      navigation.navigate("ConfirmEmail", { username });
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed ");
  };
  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed ");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput
          placeholder="Name"
          control={control}
          name="name"
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be minimum 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Name should be maximum 24 characters long",
            },
          }}
        />
        <CustomInput
          placeholder="Username"
          control={control}
          name="username"
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
        <CustomInput
          placeholder="Email"
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
        <CustomInput
          placeholder="Password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Password should be maximum 8 characters long",
            },
          }}
        />
        <CustomInput
          placeholder="password-repeat"
          name="repeatPassword"
          control={control}
          secureTextEntry
          rules={{
            validate: (value) => value === pwd || "Password do not match",
          }}
        />
        <CustomButton
          text={loading ? "Loading..." : "Register"}
          onPress={handleSubmit(OnRegisterPressed)}
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            terms of use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />
        <CustomButton
          text="Have an account? Sign In"
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

export default SignUpScreen;
