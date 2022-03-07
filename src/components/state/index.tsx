import React, { useState, FC, useEffect } from 'react';
import Child from './child';

const Parent: FC = () => {
  const [value, setValue] = useState(0);
  console.log('App render', value);
  useEffect(() => {
    setInterval(() => {
      setValue(1);
    }, 1000);
  }, []);
  return (
    <div>
      <div>{value}</div>
      <Child />
    </div>
  );
};

export default Parent;
