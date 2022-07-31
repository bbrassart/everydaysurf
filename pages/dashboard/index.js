import React, { useEffect, useState } from "react";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import SpinnerScreen from "../../src/components/SpinnerScreen";
import DashboardScreen from "../../src/components/DashboardScreen";
import { SESSIONS_PATH } from "../../src/paths";

const Dashboard = () => {
  const { user, isLoading } = useUser();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(SESSIONS_PATH)
        .then((response) => response.json())
        .then((response) => {
          setSessions(response.sessions);
        });
    }
  }, [user]);

  return isLoading ? (
    <SpinnerScreen />
  ) : (
    <DashboardScreen sessions={sessions} user={user} />
  );
};

export default Dashboard;

export const getServerSideProps = withPageAuthRequired();
