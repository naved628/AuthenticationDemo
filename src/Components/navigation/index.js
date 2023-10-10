import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../../Screens/SignInScreen";
import SignUpScreen from "../../Screens/SignUpScreen";
import ConfirmEmailScreen from "../../Screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../../Screens/ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "../../Screens/NewPasswordSceeen/NewPasswordScreen";
import HomeScreen from "../../Screens/HomeScreen";
import { Auth, Hub } from "aws-amplify";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try{
      //currentAuthenticatedUser is checked the user is logged in or not
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true }); // byPassCache will not get login from cache it will get from cognito in amplify.
      setUser(authUser);
    }catch(e){
      setUser(null);
    }
    
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      console.log(data.payload);
      //this if will check the user is SignIn or SignOut in payload of data 
      if(data.payload.event === 'signIn' || data.payload.event === 'signOut'){
        checkUser();
      }
    }
    //The hub is used for like if I Login but my I'm not navigate to Home screen that's why we need to use Hub which will listen from amplify.
    Hub.listen('auth', listener);
    
    //also we need to remove listener when listener work is over
    return () => Hub.remove('auth',listener);
  }, []);

  if(user === undefined){
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
