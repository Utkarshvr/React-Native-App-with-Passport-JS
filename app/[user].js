import { useLocalSearchParams } from "expo-router";
import {
  ArrowLeftIcon,
  Button,
  ButtonGroup,
  ButtonText,
  Center,
  HStack,
  Heading,
  Icon,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";
import { Input } from "@gluestack-ui/themed";

export default function UserPage() {
  const { user } = useLocalSearchParams();

  return (
    <Box
      p={"$1"}
      flex={1}
      $dark-bgColor="$secondary950"
      $light-bgColor="$secondary0"
    >
      <Text>UserPage</Text>
      <Text>{user}</Text>

      <HStack
        p="$3"
        alignItems="center"
        justifyContent="center"
        borderColor="$backgroundLight300"
        borderWidth={1}
        borderRadius="$lg"
        $dark-borderColor="$backgroundDark700"
        // flexWrap="wrap"
        flexDirection="column"
        gap={"$3"}
      >
        <Box>
          <Heading mb="$1.5">Was this page helpful?</Heading>
          <Text fontSize="$sm">
            We use this feedback to improve the quality of our documentation.
          </Text>
        </Box>
        <ButtonGroup space="md">
          <Button variant="outline" py="$2.5" action="secondary">
            <ButtonText fontSize="$sm" fontWeight="$medium">
              No
            </ButtonText>
          </Button>
          <Button
            variant="solid"
            // bg="$success700"
            // borderColor="$success700"
            // $active-bg="$red800"
            isDisabled={false}
            action="positive"
          >
            <ButtonText fontSize="$sm" fontWeight="$medium">
              Yes
            </ButtonText>
          </Button>
        </ButtonGroup>
      </HStack>

      <Login />
    </Box>
  );
}

function Login() {
  return (
    <Center>
      <Box
        p="$5"
        maxWidth="$96"
        borderWidth="$1"
        borderColor="$backgroundLight300"
        borderRadius="$lg"
        $dark-borderColor="$backgroundDark700"
      >
        <VStack space="xs" pb="$4">
          <Heading lineHeight={30}>Set new password</Heading>
          <Text fontSize="$sm">
            Almost done. Enter your new password and you are all set.
          </Text>
        </VStack>
        <VStack space="xl" py="$2">
          <Input variant="underlined" size="sm">
            <InputField
              py="$2"
              placeholder="New password"
              placeholderTextColor="#aaa"
            />
          </Input>
          <Input variant="underlined" size="sm">
            <InputField
              py="$2"
              placeholder="Confirm new password"
              placeholderTextColor="#aaa"
            />
          </Input>
        </VStack>
        <VStack space="lg" pt="$4">
          <Button size="sm">
            <ButtonText>Submit</ButtonText>
          </Button>
          <Box flexDirection="row">
            <Button variant="link" p="$0" size="sm">
              {/* ArrowLeftIcon is imported from 'lucide-react-native' */}
              <Icon size="md" mr="$1" as={ArrowLeftIcon} />
              <ButtonText>Back to login</ButtonText>
            </Button>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
}
