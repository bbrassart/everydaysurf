import { useUser } from "@auth0/nextjs-auth0/";
import { DASHBOARD_PATH } from "../src/paths";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import SpinnerScreen from "../src/components/SpinnerScreen";
import LoginScreen from "../src/components/LoginScreen";

const Home = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user && !isLoading) {
      router.push(DASHBOARD_PATH);
    }
  }, [user, isLoading, router]);

  return isLoading ? <SpinnerScreen /> : <LoginScreen />;
};

export default Home;
