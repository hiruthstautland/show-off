import React from "react";
import { SafeAreaView, Button } from "react-native";
import SafeViewAndroid from "./shared-components/SafeViewAndroid";

export const LandingScreen = ({ navigation }) => {
  const navigationTo = (command) => navigation.navigate(command);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Button title="Register" onPress={() => navigationTo("Register")} />
      <Button title="Login" onPress={() => navigationTo("Login")} />
    </SafeAreaView>
  );
};
