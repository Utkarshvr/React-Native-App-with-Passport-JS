import {
  Box,
  Button,
  ButtonGroup,
  ButtonText,
  Spinner,
  Text,
} from "@gluestack-ui/themed";

import React, { useEffect } from "react";

import { Linking } from "react-native";
import {
  deleteStorage,
  handleOpenURL,
  openLoginUrl,
} from "../utils/utilityFunc";
import { useAuthAPI, useAuthData } from "../context/AuthContext";
import axiosInstance from "../utils/axiosInstance";

export default function index() {
  const { setAuthToken, reset } = useAuthAPI();

  useEffect(() => {
    Linking.addEventListener(
      "url",
      (url) =>
        url &&
        handleOpenURL(url.url).then((authToken) => {
          console.log({ TOKEN___AFTER___LOGIN: authToken });
          setAuthToken(authToken || null);
        })
    );

    Linking.getInitialURL().then((url) => {
      if (url) handleOpenURL({ url });
    });

    return () => {
      Linking.removeAllListeners("url");
    };
  }, []);

  const { isAuthorized, isLoading, user, authToken } = useAuthData();
  console.log({
    isAuthorized,
    isLoading,
    user,
    authToken: authToken ? "PRESENT" : "NOT PRESENT",
  });

  const singOut = async () => {
    await deleteStorage("authToken");
    axiosInstance.defaults.headers.common["Authorization"] = "";
    reset();
    alert("Signed Out");
  };

  if (isLoading)
    return (
      <Box
        padding={16}
        gap={24}
        flex={1}
        alignItems="center"
        justifyContent="center"
        $dark-bg="$secondary950"
      >
        <Spinner size={"large"} />
      </Box>
    );

  return (
    <Box padding={16} gap={24} flex={1} $dark-bg="$secondary950">
      <Text bold fontSize={"$xl"}>
        {user?.name ? `👋 Welcome, ${user?.name}` : "Login Please"}
      </Text>

      <Box gap={24}>
        {isAuthorized && (
          <Button onPress={singOut} variant="outline" action="negative">
            <ButtonText>Sign Out</ButtonText>
          </Button>
        )}
        {!isAuthorized && (
          <ButtonGroup alignItems="center" justifyContent="center">
            <Button
              onPress={() => {
                // router.push("/auth/signin");
                openLoginUrl();
              }}
              variant="outline"
            >
              <ButtonText>Sign In</ButtonText>
            </Button>
          </ButtonGroup>
        )}

        <Button>
          <ButtonText>Get My Playlists</ButtonText>
        </Button>
      </Box>
    </Box>
  );
}
