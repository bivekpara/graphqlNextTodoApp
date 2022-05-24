import React, { useEffect, useState, Fragment } from "react";
import { useMutation, gql, useSubscription } from "@apollo/client";

import OnlineUser from "./OnlineUser";

const OnlineUsersWrapper = () => {
  const [onlineIndicator, setOnlineIndicator] = useState(0);
  let onlineUsersList;
  useEffect(() => {
    // Every 20s, run a mutation to tell the backend that you're online
    updateLastSeen();
    setOnlineIndicator(setInterval(() => updateLastSeen(), 20000));

    return () => {
      // Clean up
      clearInterval(onlineIndicator);
    };
  }, []);

  const UPDATE_LASTSEEN_MUTATION = gql`
    mutation updateLastSeen($now: timestamptz!) {
      update_users(where: {}, _set: { last_seen: $now }) {
        affected_rows
      }
    }
  `;
  const [updateLastSeenMutation] = useMutation(UPDATE_LASTSEEN_MUTATION);

  const updateLastSeen = () => {
    // Use the apollo client to run a mutation to update the last_seen value
    updateLastSeenMutation({
      variables: { now: new Date().toISOString() },
    });
  };

  const { loading, error, data } = useSubscription(
    gql`
      subscription getOnlineUsers {
        online_users(order_by: { name: asc }) {
          id
          name
        }
      }
    `
  );

  if (loading) {
    return <span>Loading...</span>;
  }
  if (error) {
    console.error(error);
    return <span>Error!</span>;
  }
  if (data) {
    onlineUsersList = data.online_users.map((u) => (
      <OnlineUser key={u.id} user={u} />
    ));
  }

  return (
    <div className="onlineUsersWrapper">
      <Fragment>
        <div className="sliderHeader">
          Online users - {onlineUsersList.length}
        </div>
        {onlineUsersList}
      </Fragment>
    </div>
  );

  // const onlineUsers = [{ name: "someUser1" }, { name: "someUser2" }];

  // const onlineUsersList = [];
  // onlineUsers.forEach((user, index) => {
  //   onlineUsersList.push(<OnlineUser key={index} index={index} user={user} />);
  // });

  // return (
  //   <div className="onlineUsersWrapper">
  //     <div className="sliderHeader">Online users - {onlineUsers.length}</div>
  //     {onlineUsersList}
  //   </div>
  // );
};

export default OnlineUsersWrapper;
