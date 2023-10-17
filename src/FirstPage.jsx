import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

const FirstPage = () => {
    const { username, id, setId, setUsername } = useContext(UserContext);
    function logout() {
        axios.post("/logout").then(() => {
          setId(null);
          setUsername(null);
        });
      }
  return (
    <div>
      <div>{username}</div>
      <button
            onClick={logout}
            className="text-small bg-blue-50 py-1 px-2 border rounded-sm text-gray-500"
          >
            Logout
          </button>
    </div>
  )
}

export default FirstPage
