import React, { useEffect, useState } from 'react';
import useApiData from '../hooks/useApiData';

const ApiDataDisplay = () => {
  const { data, loading, error } = useApiData('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">API Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id} className="mb-2 p-2 border rounded">
            <h3 className="font-semibold">{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiDataDisplay;