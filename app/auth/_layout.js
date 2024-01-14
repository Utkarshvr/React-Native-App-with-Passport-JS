import { Redirect, Slot, Stack } from "expo-router";
import { useAuthData } from "../../context/AuthContext";

export default function _layout() {
  const { isAuthorized } = useAuthData();

  if (isAuthorized) return <Redirect href={"/"} />;

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
