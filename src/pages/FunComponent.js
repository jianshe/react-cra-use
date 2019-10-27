import React, { useState, useEffect } from 'react';
export default function FuncComponent() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>FuncComponent</h1>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
