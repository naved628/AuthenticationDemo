import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const NewPasswordScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });
  const username = watch('username');

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onSubmitPressed = async (data) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(username, data.code, data.password);
      navigation.navigate("Home");
    } catch (e) {
      Alert.alert("Oops", e.message);
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
        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{
            required: "Code is required",
            minLength: { value: 6, message: "Code should be 6 digit long" },
            maxLength: { value: 6, message: "Code should be 6 digit long" },
          }}
          secureTextEntry
        />
        <CustomInput
          placeholder="Enter your New Password"
          name="password"
          control={control}
          rules={{
            required: "New password is required",
            minLength: {
              value: 6,
              message: "Code should be minimum 8 characters long",
            },
            maxLength: {
              value: 24,
              message: "Code should be maximum 24 characters long",
            },
          }}
          secureTextEntry
        />
        <CustomButton
          text={loading ? "Loading..." : "Submit"}
          onPress={handleSubmit(onSubmitPressed)}
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

export default NewPasswordScreen;
