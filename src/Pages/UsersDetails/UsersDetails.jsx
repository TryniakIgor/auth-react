import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

export const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      ).catch(() => setIsError(true));
      const data = await response.json();
      setUser(data);
    }

    fetchUser();
  }, [userId]);

  if (isError) {
    return <p>Ooops something goes wrong!</p>;
  }

  if (!user) {
    return <div>Loading user...</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserDetails;
