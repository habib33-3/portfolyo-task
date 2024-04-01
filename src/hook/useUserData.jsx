import { useQuery } from "@tanstack/react-query";
import getUserData from "../api";

const useUserData = () => {
  const userData = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
  });

  return userData;
};

export default useUserData;
