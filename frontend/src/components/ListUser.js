import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from './UserCard';

const ListUser = () => {
  const [userList, setUserList] = useState([]);
  const urlUsers = "http://localhost:4000/api/users/";

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(urlUsers);
      setUserList(res.data);
    };
    getUsers();
  }, []);

  const deleteUser = async (id) => { 
    await axios.delete(urlUsers + id);
    const updatedUserList = userList.filter(e => e._id !== id);
    setUserList(updatedUserList);
  }

  return (
    <div className="row">
      {userList.map(user => (
        <UserCard key={user._id} user={user} deleteUser={deleteUser} />
      ))}
    </div>
  );
};

export default ListUser;
