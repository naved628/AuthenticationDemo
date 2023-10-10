import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Auth } from "aws-amplify";

const HomeScreen = () => {

  const signOut = async() =>{
    await Auth.signOut();
  } 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text onPress={signOut} style={styles.signOutText}>Sign Out</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    alignSelf: "center",
    fontWeight: "500",
    paddingVertical:60,
    marginBottom:'auto'
  },
  signOutText: {
    width: "100%",
    textAlign: "center",
    color: "red",
    marginTop: "auto",
    marginVertical: 20,
    fontSize: 20,
  },
});

export default HomeScreen;
