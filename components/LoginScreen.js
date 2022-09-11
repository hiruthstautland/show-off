import React from "react";
import { SafeAreaView, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import SafeViewAndroid from "./shared-components/SafeViewAndroid";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../firebase-config";

export const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    const { email, password } = data;
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };
  console.log(isValid);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <TextInput
              iconName="email"
              placeholder="Enter your email here"
              value={value || ""}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          </>
        )}
        // rules={{
        //   required: {
        //     value: true,
        //     message: "Field is required!",
        //   },
        // }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            iconName="password"
            secureTextEntry={true}
            placeholder="Enter your password here"
            value={value || ""}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        // rules={{
        //   required: {
        //     value: true,
        //     message: "Field is required!",
        //   },
        //   validate: (value) => value.length < 2 && "Password is not correct",
        // }}
      />
      <Button
        title="Sign In"
        onPress={handleSubmit(onSubmit)}
        // disabled={!isValid}
      />
    </SafeAreaView>
  );
};
