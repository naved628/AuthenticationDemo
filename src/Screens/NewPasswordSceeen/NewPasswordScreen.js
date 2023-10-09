import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import SocialSignInButtons from "../../Components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigation = useNavigation();

  const {control, handleSubmit}= useForm();

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onSubmitPressed = () => {
    navigation.navigate('Home')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Code"
          name='code'
          control={control}
          rules={{required: 'Code is required', minLength: {value:6, message:'Code should be 6 digit long'}, maxLength: {value:6, message:'Code should be 6 digit long'}}}
          secureTextEntry
        />
        <CustomInput
          placeholder="Enter your New Password"
          name='new-password'
          control={control}
          rules={{required: 'New password is required', minLength: {value:6, message:'Code should be minimum 8 characters long'}, maxLength: {value:24, message:'Code should be maximum 24 characters long'}}}
          secureTextEntry

        />
        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
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
