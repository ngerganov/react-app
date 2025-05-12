// src/AxiosWithInterceptors.js
import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosConfig';

function AxiosWithInterceptors() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/posts/1');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div>
      <h3>Данные, полученные с использованием интерцепторов Axios</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default AxiosWithInterceptors;
