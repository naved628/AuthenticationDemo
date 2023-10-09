import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../../Screens/SignInScreen";
import SignUpScreen from "../../Screens/SignUpScreen";
import ConfirmEmailScreen from "../../Screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../../Screens/ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "../../Screens/NewPasswordSceeen/NewPasswordScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: "Sign in" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign up" }}
        />
        <Stack.Screen
          name="ConfirmEmail"
          component={ConfirmEmailScreen}
          options={{ title: "Confirm Email" }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ title: "Forgot password" }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPasswordScreen}
          options={{ title: "New password" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
