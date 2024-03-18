import React, { useState, useEffect } from 'react';
import { List } from "./list";

 
export function App() {
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setError] = useState("");


  useEffect(() => {
   async function fetchData(){
      try {
        const fetchUrl = 'https://api.npoint.io/86690d80ff3d455133f0';
        const response = await fetch(fetchUrl);
        const jsonData = await response.json();
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setRobots(jsonData);
        setLoading(false);
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);


  return (
    <div className="app">
      <div className="header">
        <h1 className="headline white-text">Show me the list!</h1>
      </div>
      {errMsg ? (
        <h1>{errMsg}</h1>
      ) : loading ? (
        <h1>Loading...</h1>
      ) : (
        <List robots={robots} />
      )}
    </div>
  );
}
