import { Box, Button, ButtonText, Text } from "@gluestack-ui/themed";
import { openLoginUrl } from "../../utils/utilityFunc";

export default function SignInScreen() {
  return (
    <Box gap={12} padding={16} $dark-bg="$secondary950" flex={1}>
      <Text size="2xl">You are not logged in</Text>

      <Button onPress={openLoginUrl}>
        <ButtonText fontFamily="$mono">Sign in with Google</ButtonText>
      </Button>
    </Box>
  );
}
