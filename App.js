import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LandingScreen } from "./components/LandingScreen";
import { LoadingScreen } from "./components/LoadingScreen";
import { RegisterScreen } from "./components/RegisterScreen";
import { HomeScreen } from "./components/HomeScreen";
import { LoginScreen } from "./components/LoginScreen";
import { firebaseApp } from "./firebase-config";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, isLoading] = React.useState(true);
  const [loggedIn, isLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      user ? isLoggedIn(true) : isLoggedIn(false);
      isLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRoute="LandingScreen">
          <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={{ showHeader: false }}
          />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return <HomeScreen />;
}
