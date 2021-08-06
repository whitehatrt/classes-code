import { useEffect, useState } from "react";
import axios from "axios";
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  const [userData, setUserData] = useState();

  useEffect(async () => {
    const res = await axios
      .post(`https://jsonplaceholder.typicode.com/users`)
      .catch((errors) => {
        return errors.response.status;
      });
    const { data } = res;

    setUserData(data);
  }, []);

  return userData?.id == 11 ? "Online" : "Offline";
}
export { useFriendStatus };
