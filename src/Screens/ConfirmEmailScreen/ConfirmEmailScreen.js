import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const ConfirmEmailScreen = () => {
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const [resendCodeLoading, setResendCodeLoading] = useState(false);

  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });
  const username = watch('username');

  const onConfirmCodePressed = async (data) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.signUp(data.username, data.code);
      navigation.navigate("SignIn ");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onResendPressed = async data => {
    if (resendCodeLoading) {
      return;
    }
    setResendCodeLoading(true);
    try{
      await Auth.resendSignUp(username);
      Alert.alert('Success', 'Code was resent to your email');
      
    setResendCodeLoading(false);
    }catch(e){
      Alert.alert('Oops', e.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>
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
          placeholder="Enter your Confirmation Code"
          name="code"
          control={control}
          rules={{
            required: "Confirmation code is required",
            minLength: {
              value: 6,
              message: "Confirmation code should be 6 characters long",
            },
            maxLength: {
              value: 6,
              message: "Confirmation code should be 6 characters long",
            },
          }}
          secureTextEntry
        />
        <CustomButton
          text={loading ? "Loading..." : "Confirm"}
          onPress={handleSubmit(onConfirmCodePressed)}
        />
        <CustomButton
          text={resendCodeLoading ? "Loading..." : "Resend code"}
          onPress={onResendPressed}
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
