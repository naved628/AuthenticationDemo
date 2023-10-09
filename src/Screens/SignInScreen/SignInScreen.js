import {
  View,
  Text,
  useWindowDimensions,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import Logo from "../../../assets/images/Logo_1.png";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import SocialSignInButtons from "../../Components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  const onSignInPressed = (data) => {
    console.log(data);
    navigation.navigate("Home");
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required',  minLength: {value:3, message: 'Username should be minimum 3 characters long'}, maxLength: {value:8, message: 'Username should be maximum 24 characters long'}}}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{ required: 'Password is required', minLength:{value:3, message:"Password should be minimum 3 characters long"}, maxLength:{value:8, message:"Password should be maximum 8 characters long"} }} 
        />
        <CustomButton text="Sign in" onPress={handleSubmit(onSignInPressed)} />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
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
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
