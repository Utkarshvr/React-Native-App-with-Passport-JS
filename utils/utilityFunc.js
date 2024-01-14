import * as SecureStore from "expo-secure-store";
import axiosInstance, { API_URL } from "./axiosInstance";
import { Linking } from "react-native";

export async function saveStorage(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function deleteStorage(key) {
  await SecureStore.deleteItemAsync(key);
}

export async function getStorage(key) {
  let result = await SecureStore.getItemAsync(key);
  return result;
}

export async function getUser() {
  const { data } = await axiosInstance.get(`/auth/login/success`);
  console.log(data?.data?.user);
  alert(`👋 Welcome back: ${data?.data?.user?.name}`);

  return data;
}

export async function logoutUser() {
  await deleteStorage("authToken");
  axiosInstance.defaults.headers.common["Authorization"] = "";
}

export async function getMyPlaylists() {
  const { data } = await axiosInstance.get(`/user/me/playlists`);
  return data;
}

export const handleOpenURL = async (url) => {
  if (!url) return;
  // Extract stringified user string out of the URL
  const user = decodeURI(url).match(
    /firstName=([^#]+)\/lastName=([^#]+)\/email=([^#]+)\/JWT_TOKEN=([^#]+)/
  );
  await saveStorage("authToken", user[4]);
  axiosInstance.defaults.headers.common["Authorization"] = user[4];

  return user[4];
};

export function openLoginUrl() {
  Linking.openURL(`${API_URL}/auth/google/callback`);
}
