import React from "react";
import { SafeAreaView, Text } from "react-native";
import SafeViewAndroid from "./shared-components/SafeViewAndroid";

export const LoadingScreen = () => (
  <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <Text>Loading...</Text>
  </SafeAreaView>
);
