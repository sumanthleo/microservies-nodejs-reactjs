import { useState, useEffect } from "react";
import axios from "axios";

const useLongPollingHook = (url, delay = 9000) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchApi = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  useEffect(() => {
    let timeoutId;
    const startPolling = async () => {
      await fetchApi();
    };
    startPolling();
    timeoutId = setInterval(startPolling, delay);

    return () => clearInterval(timeoutId);
  }, []);
  return { data, error };
};

export default useLongPollingHook;
