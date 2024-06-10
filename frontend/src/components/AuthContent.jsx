import React, { useState, useEffect } from 'react';
import { request } from '../axios_helper';

export default function AuthContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    request('GET', '/messages', {})
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>{data && data.map((line, index) => <p key={index}>{line}</p>)}</div>
  );
}
