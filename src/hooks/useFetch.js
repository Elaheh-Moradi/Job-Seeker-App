import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState([]); // Holds the response data
  const [error, setError] = useState(null); // Holds any error
  const [loading, setLoading] = useState(true); // Indicates loading state

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET", // Default method is GET
          headers: {
            "Content-Type": "application/json",
            ...options.headers, // Allow custom headers
          },
          ...options, // Allow custom options like body, method, etc.
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Depend on `url` to refetch when they change

  return { data, error, loading };
};

export default useFetch;
