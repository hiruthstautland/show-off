import React from "react";
import { SafeAreaView, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import SafeViewAndroid from "./shared-components/SafeViewAndroid";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../firebase-config";

export const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    const auth = getAuth(firebaseApp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };
  console.log(isValid);

  const mailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Controller
        label="jo"
        control={control}
        name="name"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            iconName="person"
            placeholder="Enter your name here"
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
        //   pattern: {
        //     value: mailRegex,
        //     message: "It's not a valid email",
        //   },
        // }}
      />
      <Controller
        control={control}
        name="email-rep"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            iconName="email-rep"
            placeholder="Re-enter your email here"
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
        // validate: (value) =>
        // value === getValues("email") || "Email is not correct",
        //   pattern: {
        //     value: mailRegex,
        //     message: "It's not a valid email",
        //   },
        // }}
      />
      <Button
        title="Sign up"
        onPress={handleSubmit(onSubmit)}
        // disabled={!isValid}
      />
    </SafeAreaView>
  );
};

/* Form submitted message */
