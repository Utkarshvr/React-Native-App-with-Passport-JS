import { NativeModules, Platform, useColorScheme } from "react-native";
import { config } from "@gluestack-ui/config";

import { createProvider } from "@gluestack-ui/provider";
import { StyledProvider } from "@gluestack-style/react";
import { OverlayProvider } from "@gluestack-ui/overlay";
import { ToastProvider } from "@gluestack-ui/toast";

import { StatusBar } from "expo-status-bar";
import { Box } from "@gluestack-ui/themed";

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

const GluestackUIStyledProvider = createProvider({ StyledProvider });

const GluestackUIProvider = ({ children, ...props }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <GluestackUIStyledProvider config={config} colorMode={colorScheme}>
      <OverlayProvider>
        <ToastProvider>
          <StatusBar
            style="auto"
            backgroundColor={
              isDark
                ? config.tokens.colors.secondary950
                : config.tokens.colors.secondary0
            }
          />

          <Box marginTop={STATUSBAR_HEIGHT} flex={1}>
            {children}
          </Box>
        </ToastProvider>
      </OverlayProvider>
    </GluestackUIStyledProvider>
  );
};

export default GluestackUIProvider;
