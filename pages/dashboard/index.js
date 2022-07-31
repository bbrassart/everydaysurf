import React from "react";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import SpinnerScreen from "../../src/components/SpinnerScreen";
import DashboardScreen from "../../src/components/DashboardScreen";

const Dashboard = () => {
  const { user, isLoading } = useUser();

  return isLoading ? <SpinnerScreen /> : <DashboardScreen user={user} />;
};

export default Dashboard;

export const getServerSideProps = withPageAuthRequired();
