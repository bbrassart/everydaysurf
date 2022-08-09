import React, { useEffect, useState } from "react";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import SpinnerScreen from "../../src/components/SpinnerScreen";
import DashboardScreen from "../../src/components/DashboardScreen";
import { SESSIONS_PATH, DELETE_SESSION_PATH } from "../../src/paths";

const Dashboard = () => {
  const { user, isLoading } = useUser();
  const [isSessionRequestRunning, setIsSessionRequestRunning] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [idToDelete, setIdToDelete] = useState(null);

  useEffect(() => {
    if (user && !isSessionRequestRunning) {
      setIsSessionRequestRunning(true);

      fetch(SESSIONS_PATH)
        .then((response) => response.json())
        .then((response) => {
          setSessions(
            response.sessions.map((session, index) => ({
              ...session,
              _index: index + 1,
            }))
          );
        })
        .finally(() => {
          setIsSessionRequestRunning(false);
        });
    }
  }, [user]);

  useEffect(() => {
    if (idToDelete) {
      fetch(`${DELETE_SESSION_PATH}/${idToDelete}`, { method: "DELETE" })
        .then((response) => response.json())
        .then(() => {
          setSessions(
            sessions
              .filter((session) => session._id !== idToDelete)
              .map((session, index) => ({
                ...session,
                _index: index + 1,
              }))
          );
        });
    }
  }, [idToDelete]);

  return isLoading ? (
    <SpinnerScreen />
  ) : (
    <DashboardScreen
      data={sessions}
      user={user}
      setIdToDelete={setIdToDelete}
    />
  );
};

export default Dashboard;

export const getServerSideProps = withPageAuthRequired();
