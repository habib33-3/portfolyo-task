import axios from "axios";

const getUserData =async () => {
  const { data } =await axios.get(
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  );

  return data;
};

export default getUserData;
