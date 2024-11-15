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
    <div className="flex flex-row gap-20 w-[60%] m-auto h-[100vh] justify-center items-center flex-wrap py-10">
      {listOfUsers.map((user) => (
        <div
          className="flex flex-col border items-center border-gray-500 bg-blue-200 rounded-md p-4 w-60 h-60"
          key={user.id}
        >
          <span className="inline-flex items-center justify-center size-[62px] font-semibold rounded-full leading-none border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
            {user.name.split(" ")[0][0] + user.name.split(" ")[1][0]}
          </span>
          <p className="text-center font-bold text-lg my-2 text-nowrap">
            {user.name}
            <br />
            <span className="font-normal">
              <em>({user.username})</em>
            </span>
          </p>

          <p className="text-nowrap text-sm my-2">
            Email: <span className="font-semibold">{user.email}</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-700">
            <i class="fa-solid fa-globe"></i>
            <a
              href={`http://www.${user.website}`}
              target="_blank"
              rel="noreferrer"
              className=" underline"
            >
              {user.website}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
