import { Box, Button, ButtonText, Text } from "@gluestack-ui/themed";

export default function SignUpScreen() {
  return (
    <Box>
      <Text>You are not loggen in</Text>
      <Button>
        <ButtonText fontFamily="$mono">Sign up with Google</ButtonText>
      </Button>
    </Box>
  );
}
