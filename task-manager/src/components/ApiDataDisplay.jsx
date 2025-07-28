import React, { useEffect, useState } from 'react';

const ApiDataDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">API Data</h2>
      <ul className="list-disc pl-5">
        {data.slice(0, 10).map(item => (
          <li key={item.id} className="mb-2 p-2 border rounded text-gray-700 dark:text-gray-300">
            <h3 className="font-semibold">{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiDataDisplay;