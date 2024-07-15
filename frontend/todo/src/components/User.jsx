import { useState, useEffect } from "react";
import axios from "../api/axios";

export const User = () => {
      const [user, setUser] = useState();
      
      useEffect(() => {
            let isMounted = true;
            const controller = new AbortController();

            const getUsers = async () => {
                  try {
                        const response = await axios.get("/users", { signal: controller.signal });
                        console.log(response.data);
                        isMounted && setUser(response.data);
                  } catch (err) {
                        console.error(err);
                  }
            }
            getUsers();

            return () => {
                  isMounted = false;
                  controller.abort();
            }
      }, [])

  return (
    <artice>
      <h2>Users List</h2>
      {user?.length ? (
        <ul>
          {user.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </artice>
  );
};
