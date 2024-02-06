import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchData = async (url, options) => {
    try {
      setIsLoading(true);
      const baseURL = import.meta.env.VITE_API_URL;
      const urlfull = baseURL + "/" + url;
      const response = await fetch(urlfull, options);
      const data = await response.json();

      if (!response.ok)
        throw new Error(
          JSON.stringify({
            status: response.status,
            statusText: response.statusText,
            message: data.detail,
          })
        );
      setData(data);
      setErr(null);
    } catch (err) {
      console.log("err usefetch", err);
      setErr(err);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    if (url) {
      fetchData();
    }
  }, [url, options]);

  return { data, isLoading, err, fetchData };
};

export default useFetch;


/**

import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchData = async (url, options) => {
    try {
      setIsLoading(true);
      const baseURL = import.meta.env.VITE_API_URL;
      const urlfull = baseURL + "/" + url;
      const response = await fetch(urlfull, options);
      const data = await response.json();

      if (!response.ok)
        throw new Error(
          JSON.stringify({
            status: response.status,
            statusText: response.statusText,
            message: data.detail,
          })
        );
      setData(data);
      setErr(null);
    } catch (err) {
      console.log("err usefetch", err);
      setErr(err);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    if (url) {
      fetchData(url, options);
    }
  }, [url, options]);

  return { data, isLoading, err, fetchData };
};

export default useFetch;
*/
