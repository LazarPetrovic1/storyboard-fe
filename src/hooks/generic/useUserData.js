import { useState } from "react";
import { useSelector } from "react-redux";

function useUserData() {
  const user = useSelector(state => state.auth.user);
  const [username, setUsername] = useState(() => user?.username ? user?.username : "");
  const [email, setEmail] = useState(() => user?.email ? user?.email : "");
  return { username, setUsername, email, setEmail };
}

export default useUserData;