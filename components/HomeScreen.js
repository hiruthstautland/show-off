import React from "react";
import { SafeAreaView, Text } from "react-native";
import SafeViewAndroid from "./shared-components/SafeViewAndroid";

export const HomeScreen = () => (
  <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <Text>Logged in home screen</Text>
  </SafeAreaView>
);
