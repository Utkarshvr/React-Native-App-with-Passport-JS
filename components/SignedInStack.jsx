import { config } from "@gluestack-ui/config";
import { Redirect, Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { useAuthData } from "../context/AuthContext";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignedInStack() {
  const colorMode = useColorScheme();
  const isDark = colorMode === "dark";

  const backgroundColor = isDark
    ? config.tokens.colors.secondary950
    : config.tokens.colors.secondary0;
  const color = !isDark
    ? config.tokens.colors.secondary950
    : config.tokens.colors.secondary0;

  // const { isAuthorized } = useAuthData();

  // // if (!isAuthorized) return <Redirect href={"/auth/signin"} />;
  // console.log("SIGNEDIN STACK");

  // useEffect(() => {
  //   console.log(isAuthorized);
  //   if (!isAuthorized) router.replace("/auth/signin");
  // }, [isAuthorized]);

  return (
    <Tabs
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

        // tabBarInactiveTintColor: config.tokens.colors.secondary0,
        // tabBarIconStyle: {
        //   color: config.tokens.colors.secondary0,
        // },
        tabBarActiveTintColor: config.tokens.colors.secondary0,
      }}
    >
      <Tabs.Screen
        // Name of the dynamic route.
        name="index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        // Name of the dynamic route.
        name="you"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* HIDDEN */}
      {["auth", "[user]"].map((name) => (
        <Tabs.Screen
          key={name}
          // Name of the route to hide.
          name={name}
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
      ))}
    </Tabs>
  );
}
