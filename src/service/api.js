import axios from 'axios';
import { useState, useEffect } from 'react';

axios.defaults.baseURL = 'http://localhost:3000/user';

export const useApi = (axiosParams) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.request(axiosParams);
      setData(response.data);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};
