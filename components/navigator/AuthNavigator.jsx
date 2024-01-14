import { Redirect } from "expo-router";
import { useAuthData } from "../../context/AuthContext";
import SignedInStack from "../SignedInStack";
import SignedOutStack from "../SignedOutStack";

export default function AuthNavigator() {
  const { isAuthorized } = useAuthData();
  console.log(isAuthorized);
  // const isAuthorized = true;
  // console.log(isAuthorized);

  // if (isAuthorized) return <Redirect href={"/index"} />;
  // else return <Redirect href={"/auth/signin"} />;

  // return isAuthorized ? <SignedInStack /> : <SignedOutStack />;
  return <SignedInStack />;
}
