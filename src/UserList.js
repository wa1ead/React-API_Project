import { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  //THE LIST OF USERS STATE
  const [listOfUsers, setListOfUsers] = useState([]);

  //FETCHING DATA WHEN THE PAGE RENDERED FOR THE 1ST TIME
  useEffect(() => {
    //FETCHING USERS DATA FROM JSONPLACEHOLDER USING AXIOS
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUsers(res.data))
      .catch((err) => console.error(err.message));
  }, []);

  console.log(listOfUsers);
  return (
    <div>
      {listOfUsers.map((user) => (
        <span class="inline-flex items-center justify-center size-[62px] font-semibold rounded-full leading-none border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
          {user.name.split(" ")[0][0] + user.name.split(" ")[1][0]}
        </span>
      ))}
    </div>
  );
}
