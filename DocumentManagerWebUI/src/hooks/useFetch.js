import { useState, useEffect } from "react";
import { baseUrl } from "../constants";

const useFetch = (url, options) => {
  const [status, setStatus] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function fetchNow(
    url,
    options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ) {
    setStatus({ loading: true });
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setStatus({ loading: false, data: res });
      })
      .catch((error) => {
        setStatus({ loading: false, error });
      });
  }

  useEffect(() => {
    if (url) {
      fetchNow(url, options);
    }
  }, []);

  return { ...status, fetchNow };
};

export default useFetch;
