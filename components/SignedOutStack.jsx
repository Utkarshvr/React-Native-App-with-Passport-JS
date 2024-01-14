import { config } from "@gluestack-ui/config";
import { Redirect, Stack, router } from "expo-router";
import { useColorScheme } from "react-native";
import { useAuthData } from "../context/AuthContext";
import { useEffect } from "react";

export default function SignedOutStack() {
  const colorMode = useColorScheme();
  const isDark = colorMode === "dark";

  const backgroundColor = isDark
    ? config.tokens.colors.secondary950
    : config.tokens.colors.secondary0;
  const color = !isDark
    ? config.tokens.colors.secondary950
    : config.tokens.colors.secondary0;

  // const { isAuthorized } = useAuthData();

  // console.log("SINGOUT STACK");

  // // if (isAuthorized) return <Redirect href={"/index"} />;

  // useEffect(() => {
  //   console.log(isAuthorized);
  //   if (isAuthorized) router.replace("/index");
  // }, [isAuthorized]);

  return (
    <Stack
      screenOptions={{
        tabBarItemStyle: {
          marginBottom: 10,
          marginTop: 10,
        },
        tabBarStyle: {
          height: 70,
          backgroundColor,
        },
        headerStyle: {
          backgroundColor,
        },
        headerTitleStyle: { color },
        headerShown: false,
      }}
    >
      <Stack.Screen
        // Name of the dynamic route.
        name="signin"
        options={{}}
      />
    </Stack>
  );
}
