import { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  //THE LIST OF USERS STATE
  const [listOfUsers, setListOfUsers] = useState([]);

  //FETCHING DATA WHEN THE PAGE RENDERED FOR THE 1ST TIME
  useEffect(() => {
    //FETCHING USERS DATA FROM JSONPLACEHOLDER USING AXIOS
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setListOfUsers(res.data))
      .catch((err) => err.message);
  }, []);

  return <div>{listOfUsers}</div>;
}
