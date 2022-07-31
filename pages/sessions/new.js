import React from "react";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import SpinnerScreen from "../../src/components/SpinnerScreen";
import NewSessionScreen from "../../src/components/NewSessionScreen";

const NewSession = () => {
  const { user, isLoading } = useUser();
  return isLoading ? <SpinnerScreen /> : <NewSessionScreen user={user} />;
};

export default NewSession;

export const getServerSideProps = withPageAuthRequired();
