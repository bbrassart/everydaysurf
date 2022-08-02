import React, { useEffect, useState } from "react";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import SpinnerScreen from "../../src/components/SpinnerScreen";
import DashboardScreen from "../../src/components/DashboardScreen";
import { SESSIONS_PATH } from "../../src/paths";

const Dashboard = () => {
  const { user, isLoading } = useUser();
  const [isSessionRequestRunning, setIsSessionRequestRunning] = useState(true);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(SESSIONS_PATH)
        .then((response) => response.json())
        .then((response) => {
          setSessions(response.sessions.map((session, index) => ({
            ...session,
            _index: index + 1,
          })));
        })
        .finally(() => {
          setIsSessionRequestRunning(false);
        });
    }
  }, [user]);

  return isLoading || isSessionRequestRunning ? (
    <SpinnerScreen />
  ) : (
    <DashboardScreen data={sessions} user={user} />
  );
};

export default Dashboard;

export const getServerSideProps = withPageAuthRequired();
