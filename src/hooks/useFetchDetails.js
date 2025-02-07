import axios from "axios";
import { useEffect, useState } from "react";

const useFetchDetails = (endpoint) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(endpoint);
      setData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [endpoint]);
  return { data };
};
export default useFetchDetails;
