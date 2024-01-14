import { Box, Button, ButtonText, Spinner } from "@gluestack-ui/themed";
import { useAuthData } from "../context/AuthContext";
import { Text } from "@gluestack-ui/themed";
import { useState } from "react";
import { getMyPlaylists } from "../utils/utilityFunc";

export default function you() {
  const { isLoading, user } = useAuthData();

  const [playlists, setPlaylists] = useState([]);
  const [isPlaylistsLoading, setIsPlaylistsLoading] = useState(false);

  async function loadPlaylists() {
    setIsPlaylistsLoading(true);
    try {
      const data = await getMyPlaylists();
      setPlaylists(data?.playlists);
    } catch (error) {
      console.log(error);
      setPlaylists([]);
    } finally {
      setIsPlaylistsLoading(false);
    }
  }

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
        <Button onPress={loadPlaylists}>
          <ButtonText>Get My Playlists</ButtonText>
        </Button>
      </Box>
      {isPlaylistsLoading ? (
        <Box
          padding={16}
          gap={6}
          flex={1}
          alignItems="center"
          justifyContent="center"
          $dark-bg="$secondary950"
        >
          <Spinner size={"large"} />
        </Box>
      ) : (
        playlists?.map((playlist) => (
          <Box key={playlist?._id} padding={8}>
            <Text bold fontSize={"$sm"}>
              {playlist?.title}
            </Text>
          </Box>
        ))
      )}
    </Box>
  );
}
