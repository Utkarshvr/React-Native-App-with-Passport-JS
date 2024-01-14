import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect } from "react";
import { useFonts } from "expo-font";
// import { SplashScreen } from "expo-router";

import * as Linking from "expo-linking";

import GluestackUIProvider from "../Providers/GluestackUIProvider";
import AuthProvider from "../Providers/AuthProvider";
import AuthNavigator from "../components/navigator/AuthNavigator";
import AxiosInterceptor from "../Providers/AxiosInterceptor";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

const prefix = Linking.createURL("/");

export default function Layout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) {
      console.log(error);
      throw error;
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      // SplashScreen.hideAsync();
      console.log("LOADING...");
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const linking = {
    prefixes: [prefix],
  };

  return <RootLayout linking={linking} />;
}

function RootLayout() {
  return (
    <GluestackUIProvider>
      <AuthProvider>
        <AxiosInterceptor>
          <AuthNavigator />
        </AxiosInterceptor>
      </AuthProvider>
    </GluestackUIProvider>
  );
}
